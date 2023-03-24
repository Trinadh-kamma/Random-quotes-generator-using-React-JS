import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import image from "./assets/background.jpg"

function App() {
  const [advice, setAdvice] = useState("");


  useEffect(() => {
    fetchAdvice();
  },[]);


  const fetchAdvice = async () => {
    try {
      const response = axios.get("https://api.adviceslip.com/advice");
      const response1 = await (await response).data.slip.advice;
      setAdvice(response1);
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="App" style={{backgroundImage : `url(${image})`}}>
      <div className="card">
        <h1>
          {advice}
        </h1>
        <button onClick={fetchAdvice} className="button">
          Give me advice !
        </button>
      </div>
    </div>
  );
}

export default App;
