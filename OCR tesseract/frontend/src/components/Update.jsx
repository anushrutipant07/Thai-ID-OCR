import React from 'react'
import axios from "axios"

const Update = ({id, setUpdateId}) => {
  const [data,setData] = React.useState(null);
  const [loading,setLoading] = React.useState(false);

  const fetch = () => {
    setLoading(true);
    axios.get(`https://thai-id-ocr-2t0v.onrender.com/api/card/cards/${id}`).then((res) => {setLoading(false);setData(res.data)})
}
React.useEffect(() => {
    fetch();
},[id])

const handleSubmit = () => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
}
console.log("update",data)
  axios.post(`https://thai-id-ocr-2t0v.onrender.com/api/card/cards/${id}`,data,config).then(() => setUpdateId(null));
}
// for updating the information of the ID card
if(loading || !data)return <>Loading...</>
  return (
    <div style={{
      color: 'white',
      padding: '10px',
      margin: '10px'
    }}>
        <button style={{
          cursor: 'pointer',
          color: 'white',
          background: 'black',
          borderRadius: '10px',
          position: 'fixed',
          paddingInline: '30px',
          padding: '10px'
        }} onClick={() => setUpdateId(null)}>Back to records</button>
        <div style={{textAlign: 'center'}}>
    <div style={{textAlign: 'center'}}>
                "identification_number": <input type="text" value={data.identification_number} onChange={(e) =>{let nd = {...data};
                nd.identification_number = e.target.value; setData(nd)}}/> </div>
                <div style={{textAlign: 'center', marginLeft: '106px'}}>    "name": <input type="text" value={data.name} onChange={(e) =>{let nd = {...data};
                nd.name = e.target.value; setData(nd)}}/></div>
                <div style={{textAlign: 'center', marginLeft: '75px'}}> "last_name": <input type="text" value={data.last_name} onChange={(e) =>{let nd = {...data};
                nd.last_name = e.target.value; setData(nd)}}/></div>
                <div style={{textAlign: 'center', marginLeft: '60px'}}>  "date-of-birth": <input type="text" value={data.date_of_birth} onChange={(e) =>{let nd = {...data};
                nd.date_of_birth = e.target.value; setData(nd)}}/></div>
                <div style={{textAlign: 'center', marginLeft: '58px'}}>  "date-of-issue": <input type="text" value={data.date_of_issue} onChange={(e) =>{let nd = {...data};
                nd.date_of_issue = e.target.value; setData(nd)}}/></div>
                <div style={{textAlign: 'center',marginLeft: '50px'}}>  "date-of-expiry": <input type="text" value={data.date_of_expiry} onChange={(e) =>{let nd = {...data};
                nd.date_of_expiry = e.target.value; setData(nd)}}/></div>
                </div>
                
        <button style={{
          cursor: 'pointer',
          color: 'white',
          background: 'black',
          borderRadius: '10px',
          padding: '10px',
          margin: '20px',
          position: 'absolute',
          marginLeft:'45%'
          
        }} onClick={handleSubmit}>Submit</button>
        </div>
  )
}

export default Update