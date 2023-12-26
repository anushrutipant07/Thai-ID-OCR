import React, { useState, useEffect } from "react";
import axios from "axios";
import Update from "../components/Update.jsx";

const List = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [text, setText] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetch = () => {
    setLoading(true);
    axios.get("https://thai-id-ocr-2t0v.onrender.com/api/card/cards").then((res) => {
      setLoading(false);
      setData(res.data);
    });
  };
  useEffect(() => {
    fetch();
  }, [updateId]);

  useEffect(() => {
    if (text) {
      let newArr = data.filter(
        (d) =>
          d.name.toLowerCase().includes(text.toLowerCase()) ||
          d.last_name.toLowerCase().includes(text.toLowerCase()) ||
          d.identification_number.toLowerCase().includes(text.toLowerCase())
      );
      setFiltered(newArr);
    } else {
      setFiltered(data);
    }
  }, [data, text]);

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`https://thai-id-ocr-2t0v.onrender.com/api/card/cards/${id}`).then(() => fetch());
  };

  console.log(data);
  if (loading) return <>Loading...</>;

  if (updateId) {
    return <Update id={updateId} setUpdateId={setUpdateId} />;
  }
  // providing the list of records
  //providing options like delete and update to the records
  return (
    <div>
      <div style={{
        margin: '10px',
        display: "flex",
        alignItems: 'center',
        padding: '10px'
      }}>
        <label style={{
            margin:'10px',
            color: "white"
        }} htmlFor="text">Search</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {filtered.map((d) => (
        <div>
          <div
            style={{
              color: "white",
              margin: "10px",
            }}
          >
            {`{`}
            "identification_number": "{d.identification_number}", "name": "
            {d.name}", "last_name": "{d.last_name}", "date-of-birth": "
            {d.date_of_birth}", "date-of-issue": "{d.date_of_issue}",
            "date-of-expiry": "{d.date_of_expiry}"{`}`}
          </div>
          <div>
            <button style={{
                cursor: 'pointer',
                color: 'white',
                background: 'black',
                paddingInline: '10px',
                marginInline: '10px'
            }} onClick={() => handleDelete(d._id)}>Delete</button>
            <button style={{
                cursor: 'pointer',
                color: 'white',
                background: 'black',
                paddingInline: '10px',
                marginInline: '10px'
            }} onClick={() => setUpdateId(d._id)}>Update</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
