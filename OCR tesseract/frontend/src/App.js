import './App.css';
import Ocr from "./pages/Ocr.jsx"
import List from "./pages/List.jsx"
import {useState}from "react"
function App() {
  const [show,setShow] = useState(false);
  // styling of the front page
  return (
    <>
    {!show && <button style={{fontSize: 'xx-large',
    color: 'white', 
    backgroundColor: 'black',
    cursor: 'pointer',  
    marginBottom: '8%',
    padding: '15px',
    borderRadius: '10px', 
    marginLeft:'40%',
    position: 'absolute', 
    bottom: '0'}} onClick={() => setShow(true)}>Saved records</button>}

   {show && <button style={{
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'black',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    fontSize: 'x-large',
    position: 'absolute',
    marginLeft:'45%',
    bottom: '0',
    alignItems: 'center'
   }}  onClick={() => setShow(false)}>Back</button>}
     {!show && <Ocr />}
    {show && <List />}
    </>
  );
}

export default App;
