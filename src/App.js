import React, { useState, useEffect } from "react"; //importing useState
import "./App.css";
import axios from 'axios' //importing axios
import styled from 'styled-components' //adding style components
import { BASE_URL, API_KEY } from './constants' //import the api url and the api key
import Potd from './constants/Potd'
import StyledDiv from './constants/StyledDiv'

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
      <Potd data={data}/>
    </div>
  );
}

export default App;
