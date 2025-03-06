import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function App() {
  const [state,setState]=useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/quotes")
    .then((res)=>setState(res.data.quotes))
    .catch((err)=>console.log(err))
  },[])
  return(
    <div>
       {state.slice(0,10).map((value)=>(
        <p key={value.id} >{value.quote}</p>
       ))}
    </div>
  )
   
}

export default App