import React, { useContext } from 'react'
import { IoWaterOutline } from 'react-icons/io5'
import { GiRaining , GiSnowing } from 'react-icons/gi'
import { HiOutlineArrowNarrowUp } from 'react-icons/hi'
import { AppContext } from './context'

const Hours = () => {
  const { data, selected, fahrenheit } = useContext(AppContext)
  const date = new Date().getTime()/1000
  return (
    <div className="hours_container">
      {data.forecast.forecastday[selected].hour.map((item, index) =>{
        if (item.time_epoch - date + 3600  >= 0){
          return(
            <div className="hours_day" key={index}>
              <div className="hours_date">{item.time.split(" ")[1]}</div>
              <img className="hours_icon" src={item.condition.icon} alt="icon" />
              <div className="hours_temps">
              <div className="hours_max_temp">
                {fahrenheit === "f" ? item.temp_f.toFixed(0) : item.temp_c.toFixed(0)}°
              </div>
              </div>
              <div className="hours_state">{item.condition.text}</div>
              <div className="hours_avg_humidity">
                Humidity: {item.humidity}% <IoWaterOutline />
              </div>
              <div className="hours_max_wind">
                Wind: {item.wind_kph.toFixed(0)} kph <HiOutlineArrowNarrowUp 
                style={{ transform: `rotate(${-item.wind_degree}deg)` }}/>
              </div>
              <div className="hours_avg_humidity">
                {item.will_it_rain ? <>Chance of rain: {item.chance_of_rain}% <GiRaining /></> : <></>}
              </div>
              <div className="hours_avg_humidity">
                {item.will_it_snow ? <>Chance of snow: {item.chance_of_snow}% <GiSnowing /></> : <></>}
              </div>
            </div>
          )
        }
        })}


    </div>
  )
}

export default Hours