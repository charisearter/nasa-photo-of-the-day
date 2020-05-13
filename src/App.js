import React, { useState, useEffect } from "react"; //importing useState
import "./App.css";
import axios from 'axios' //importing axios

function App() {
  const [data, setData] = useState(''); //setting variable data
  useEffect ( () => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=SfX7tbXZQ3LkdWIRUdV3sr8WkToUBhFz37lw2o28')
    .then(response => {
      console.log(response.data);
      setData(response.data) //setting data to response.data
    })}, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
        <img src={data.url} alt= {data.title}/>
        <p>{data.explanation}</p>
        <button>{data.hdurl}</button>
      </p>
    </div>
  );
}

export default App;
