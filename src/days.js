import React, { useContext } from 'react'
import { IoWaterOutline } from 'react-icons/io5'
import { GiWindsock, GiRaining, GiSnowing} from 'react-icons/gi'
import { AppContext } from './context'
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const Days = () => {
  const { data, fahrenheit, selected, changeSelected} = useContext(AppContext)
  
  return (
    <div className="hours_container">
      {data.forecast.forecastday.map((item, index) => {
        let date = new Date(item.date)
      return(
        <div 
        onClick={() => changeSelected(index)} 
        className={`hours_day ${index === selected ? "day_border" : ""}`} 
        key={index}>
          <div className="hours_date">
            {days[(date).getDay()]} {date.getDate()}
          </div>
          <img className="hours_icon" 
          src={item.day.condition.icon} 
          alt="icon" />
          <div className="hours_temps">
            <div className="hours_min_temp">
              {fahrenheit === "f" ? item.day.mintemp_f.toFixed(0) : item.day.mintemp_c.toFixed(0)}°
            </div>
            <div className="hours_max_temp">
              {fahrenheit === "f" ? item.day.maxtemp_f.toFixed(0) : item.day.maxtemp_c.toFixed(0)}°
            </div>
          </div>
          <div className="hours_state">{item.day.condition.text}</div>
          <div className="hours_avg_humidity">
            Humidity: {item.day.avghumidity}% <IoWaterOutline />
          </div>
          <div className="hours_max_wind">
            Max wind: {item.day.maxwind_kph.toFixed(0)} kph <GiWindsock />
          </div>
          <div className="hours_avg_humidity">
            {item.day.daily_will_it_rain ? <>Chance of rain: {item.day.daily_chance_of_rain}% <GiRaining /></> : <></>}
          </div>
          <div className="hours_avg_humidity">
            {item.day.daily_will_it_snow ? <>Chance of snow: {item.day.daily_chance_of_snow}% <GiSnowing /></> : <></>}
          </div>

        </div>
      )})}
    </div>
  )
}

export default Days