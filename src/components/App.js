import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

function App() {
  // State for the NASA APOD data
  const [media, setMedia] = useState(null)

  // Effect hook to handle the API call side effect
  useEffect(() => {
    // API call
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(res => {
      console.log(res.data)
      setMedia(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
