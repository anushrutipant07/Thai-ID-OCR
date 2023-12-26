import React , {useState}from 'react'
import axios from "axios"
const Ocr = () => {
  const [file,setFile] = useState(null);
  const [response,setResponse] = useState(null);
  function showFilterButton() {
    
    document.getElementById("filterButton").setAttribute("style", "display: flex; align-items: center; color: blue");
  }

  function applyFilter() {
    alert("Filtering items...");
  }

  const handleSubmit = async() => {
    let formData = new FormData();
    formData.append("files", file);
    console.log(formData)
    
    const res = await axios.post("https://thai-id-ocr-2t0v.onrender.com/api/upload", formData);
    console.log("axios",res)
    setResponse(res.data);
  }
  // taking image as an input and providing information in JSON format
  return (
    <div>
    <div style={{backgroundColor:'white',
  color:"black"}}>
      <h1>Thai ID Optical Character Recognition Application</h1>
    </div>
    <div id="uploader">
      <div
        id="frmUploader"
       
      >
        <input type="file" name="image" id="image"  onChange={(e) => setFile(e.target.files[0])}/>
        <button  id="btnSubmit" onClick={handleSubmit}>Upload </button>
      </div>
    </div>

    
{response && <div style={{
  color: 'white',
  margin: '20px',
  textAlign: 'center',
  display: 'block'
}}>{`{`}
                "identification_number": "{response.identification_number}",
                "name": "{response.name}",
                "last_name": "{response.last_name}",
                "date-of-birth": "{response.date_of_birth}",
                "date-of-issue": "{response.date_of_issue}",
                "date-of-expiry": "{response.date_of_expiry}"
                {`}`}
        </div>}
  </div>
  )
}

export default Ocr