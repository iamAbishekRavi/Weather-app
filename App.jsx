/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const  [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=97423db1ccfe0607a6700548ebe77523`
  

  const searchLocation =  (event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then((Response) =>{
        setData(Response.data)
        console.log(Response.data)
      })
      setLocation('')
    }
  }
  return (
    <>
      <div className="app">
        <div className="search">
          <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text" />
        </div>
      <div className="container">
        <div className="top">
          <div className="location">
          <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
        <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        </div>
        {data.name !== undefined &&
        <><div className="bottom"></div><div className="feels">
              <p>Feels like</p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              
            </div><div className="humidity">
                 <p>Humidity</p>
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                
              </div><div className="wind">
                 <p>Wind speed</p>
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                
              </div></>
        } </div>
      </div>
    </>
  );
}

export default App
