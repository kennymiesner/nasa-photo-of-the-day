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
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2021-07-15`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <header>
      <div className="container-1920">
        <div className="logo">
          <img src="./logo-white.svg" />
          <h1>Photo of the Day</h1>
        </div>
        <div className="photo-info">
          <div className="photo-title">
            <h3>Title</h3>
            <h2>The Dark Tower in Scorpius</h2>
          </div>
          <div className="photo-author">
            <h3>Photographer</h3>
            <h2>Martin Pugh</h2>
          </div>
        </div>
      </div>
    </header>
  );

  // return (
  //   <div className="App">
  //     {
  //       nasaData &&
  //       <>
  //       <h2>Date: {nasaData.date}</h2>
  //       <img className='featured-image' src={nasaData.hdurl} alt='AR2835: Islands in the Photosphere'/>
  //       </>
  //     }
  //   </div>
  // );
}

export default App;