import { useEffect, useState } from 'react';
import cluods from "./img/clouds.png"
import humidity from "./img/humidity.png"
import winds from "./img/winds.png"
import temperature from "./img/temperature.png"

const Home = ({search}) => {
    const [data, setData] = useState(null);
    const [sys, setSys] = useState(null);
    const [wind, setWind] = useState(null);
    const [clouds, setClouds] = useState(null);

    const currentTime = new Date().toLocaleTimeString();
    const currentDay = new Date().toLocaleDateString();
    const date = new Date();


    useEffect(() => {
        const weatherApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=4f966648282d9c9662dea8b2efeda9c4`;
            const response = await fetch(url);
            const resJson = await response.json();
            setData(resJson.main);
            setSys(resJson.sys);
            setWind(resJson.wind)
            setClouds(resJson.clouds)
        }
        weatherApi()
    }, [search])

    return (
        <div style={{ width: "50vw", background: "#0362bf", color: "rgba(255, 255, 255, 0.7)", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {!data ? (<p style={{ textAlign: "center" }}>No Data Found</p>) : (<div className="weather">
                <h1 style={{ fontSize: "23px", textAlign: "center" }}>CURRENT WEATHER</h1>
                <div className="topLeft">
                    <p style={{ "fontSize": "36px", "display": "flex", "flexDirection": "column", "textTransform": "capitalize" }}>
                        {search}, {sys.country}
                        <small className='date' style={{ "fontSize": "17px" }}>{currentDay}, {currentTime}</small>
                    </p>

                    <p className='temp' style={{ fontSize: "36px" }}>
                        <img style={{ width: "29px", height: "57px" }} className='forecastImg' src={temperature} alt="" />
                        {data.temp} °C
                    </p>
                </div>
                <br />
                <br />
                <h1 style={{ fontSize: "23px", textAlign: "center" }}>AIR CONDITIONS</h1>
                <div className="topRight">

                    <p className='speed' style={{ fontSize: "36px" }}><img className='forecastImg' style={{ width: "65px" }} src={winds} /> {wind.speed} m/s</p>

                    <p className='humidity' style={{ fontSize: "36px" }}><img className='forecastImg' style={{ width: "45px" }} src={humidity} alt="" /> {data.humidity}%</p>

                    <p className='clouds' style={{ fontSize: "36px" }}><img className='forecastImg' style={{ width: "45px" }} src={cluods} alt="" /> {clouds.all}%</p>

                </div>
            </div>)}
        </div>
    );
};

export default Home;