import React, { useEffect, useState } from 'react'
import cluods from "../img/clouds.png"
import humidity from "../img/humidity.png"
import winds from "../img/winds.png"
import temperature from "../img/temperature.png"

const Forecasts = ({search}) => {
  const [forecastData, setForecastData] = useState(null)

  useEffect(() => {
    const forcastsApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=4f966648282d9c9662dea8b2efeda9c4&units=Metric&cnt=6`;
      const response = await fetch(url);
      const resJson = await response.json();
      setForecastData(resJson.list)
      console.log(forecastData)
    }

    forcastsApi();
  }, [search])

  return (
    <div className='forecast' style={{borderLeft: "0.5px solid black"}}>
      <div className='forecastBody'>
      <h1 style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.7)" }}>Weekly Weather Data</h1>
        {!forecastData ? (<h1 style={{ textAlign: "center" }}>No Data Found</h1>) : forecastData.map((e) => {
          return (
            <div key={e.dt} className='forecastDiv' style={{color: "rgba(255, 255, 255, 0.7)"}}>
              <div className='temp'><img className='forecastImg' src={temperature} alt="" /> {e.main.temp} °C</div>
              <div className='clouds'><img className='forecastImg' style={{ width: "38px" }} src={cluods} alt="" />&nbsp;{e.clouds.all}%</div>
              <div className='speed'><img className='forecastImg' style={{ width: "38px" }} src={winds} alt="" />{e.wind.speed}m/s</div>
              <div className='humidity'><img className='forecastImg' style={{ width: "25px" }} src={humidity} alt="" />&nbsp;{e.main.humidity}%</div>
              <div className='discription'>{(e.dt_txt).split(" ")[0]}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecasts