import React, { useState } from 'react'
import axios from "axios"

export const Weather = () => {

    const [city, setCity] = useState("");
    const[weather, setWeather] = useState()

    const handleCity =(e)=>{
        setCity(e.target.value)
    }

    const fetchApi = async ()=>{
        try{
            const apiKey = "ce59f04b020060514daa1c4aae16cb65"
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            setWeather(response)
            console.log(response)
        }
        catch(error){
            console.error("Error fetching Api Data: ", error)
        }
    }

    const handleButton =()=>{
        fetchApi()
    }

  return (
    <>
    <div className="container">
        
        
        <input type="text" placeholder='Enter City Name' name="" id="" value={city} onChange={handleCity} />
        <button onClick={handleButton}>Get Weather</button>        
      
      <div className='data'>
            {
                weather && 
                <>
                <h2>City Name: {weather.data.name}</h2>
                <h2>Temperature: {Math.floor(weather.data.main.temp -273.15)}&deg;C</h2>
                <h2>Description: {weather.data.weather[0].description}</h2>
                <h2>Wind-Speed: {weather.data.wind.speed}m/s</h2>
                </>
            }
        </div>
       
        
    </div>
    </>
)
}
