import React, { useState, useEffect } from "react"; //importing useState
import "./App.css";
import axios from 'axios' //importing axios
import { BASE_URL, API_KEY } from './constants' //import the api url and the api key

function App() {
  const [data, setData] = useState(''); //setting variable data
  useEffect ( () => {
    axios
    .get(`${BASE_URL}?api_key=${API_KEY}`)
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
        {/* <button>{data.hdurl}</button> */}
      </p>
    </div>
  );
}

export default App;
