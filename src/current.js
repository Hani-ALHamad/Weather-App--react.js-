import React, { useContext } from 'react'
import { HiOutlineArrowNarrowUp, HiOutlineRefresh } from 'react-icons/hi'
import { GiWindsock } from 'react-icons/gi'
import { IoWaterOutline } from 'react-icons/io5'
import { AppContext } from './context'


const Current = () => {
  const { 
    data, 
    fahrenheit, 
    toggleFahrenheit, 
    update, 
    handleRefresh, 
    refreshing} = useContext(AppContext)

  return (
    <div className="current_container">
      {!refreshing[0] ?<button className="current_refresh" onClick={() => handleRefresh()}><HiOutlineRefresh /></button> : <></>}
      <div className="current_box">
        <div className="current_icon_state">
          <img src={`https://cdn.weatherapi.com/weather/128x128/${data.current.is_day === 1 ? "day" : "night"}/${data.current.condition.icon.split("/").slice(-1)}`} alt="icon" />
          <div className="current_state">{data.current.condition.text}</div>
          <div className="current_switch_degree">
            <button 
              className={`current_switch_degree_button_F ${fahrenheit}`} 
              onClick={() => toggleFahrenheit("f")}>F
            </button>
            &nbsp; | &nbsp;
            <button 
              className={`current_switch_degree_button_C ${fahrenheit}`} 
              onClick={() => toggleFahrenheit("c")}>C
            </button>
            </div>
        </div>
        <div className="current_city_temp">
          <div className="current_city">{data.location.name}, {data.location.country}</div>
          <div className="current_temp">
            {fahrenheit === "f" ? data.current.temp_f.toFixed(0) : data.current.temp_c.toFixed(0)}°
          </div>
          <div className="current_feels_like">
            Feels like {fahrenheit === "f" ? data.current.feelslike_f.toFixed(0) : data.current.feelslike_c.toFixed(0)}°
          </div>
        </div>
      </div>
      <div className="current_last_update">
        Last update: {update[0]} <br />Next auto update: {update[1]} (Browser time)
      </div>
      <div className="current_wind_box">
        <div>Wind speed: {data.current.wind_kph.toFixed(0)} kph <GiWindsock /></div>
        <div>Wind degree: {data.current.wind_degree}°
          <span className="current_wind_arrow">&nbsp;
            <HiOutlineArrowNarrowUp style={{ transform: `rotate(${-data.current.wind_degree}deg)` }} />
          </span>
        </div>
        <div>Humidity: {data.current.humidity}% <IoWaterOutline /></div>
      </div>
    </div>
  )
}

export default Current