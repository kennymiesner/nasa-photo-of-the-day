import React, { useState, useEffect } from "react";
import axios from 'axios'
import { API_KEY } from '../constants'
import "./App.css";

function App() {
  // State for the NASA APOD data
  const [nasaData, setNasaData] = useState(null)

  // Effect hook to handle the API call side effect
  useEffect(() => {
    // API call
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2021-07-09`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {
        nasaData &&
        <>
        <h2>Date: {nasaData.date}</h2>
        <img className='featured-image' src={nasaData.hdurl} alt='AR2835: Islands in the Photosphere'/>
        </>
      }
    </div>
  );
}

export default App;
