import React from 'react'

const Weathercard = ({tempInfo}) => {

    const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country, 
        sunset,
    } = tempInfo;

    return (
        <>
          <article className="widget">
            <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}/>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">Sunny</div>
                    <div className="place">Kanpur, India</div>
                </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-sunset"></i>
                            </p>
                            <p className="extra-info-leftside">
                                18:19 PM <br/>Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-humidity"></i>
                            </p>
                            <p className="extra-info-leftside">
                                18:19 PM <br/>Humidity
                            </p>
                        </div>

                        
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-rain"></i>
                            </p>
                            <p className="extra-info-leftside">
                                18:19 PM <br/>Humidity
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-strong-wind"></i>
                            </p>
                            <p className="extra-info-leftside">
                                18:19 PM <br/>Humidity
                            </p>
                        </div>
                    </div>

                   

                </div>
         
        </article>  
        </>
    )
}

export default Weathercard;
