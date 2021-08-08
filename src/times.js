import React, { useContext } from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { 
  WiMoonNew, 
  WiMoonWaxingCrescent3, 
  WiMoonFirstQuarter,
  WiMoonWaxingGibbous6,
  WiMoonFull,
  WiMoonWaningGibbous2,
  WiMoonThirdQuarter,
  WiMoonWaningCrescent3
} from 'react-icons/wi'
import { AppContext } from './context'

const Times = () => {
  const {data, selected} = useContext(AppContext)
  return (
    <div className="times_container">
      <div className="times_first_box">
        <div className="times_box">
          <div className="times_inner_box">
            <div className="times_text_title">Sun</div>
            <div className="times_text_small">Sunrise</div>
            <div className="times_text"><BiSun /><HiOutlineArrowNarrowUp /> 
            &nbsp;{data.forecast.forecastday[selected].astro.sunrise}</div>
          </div>
          <div className="times_inner_box">
            <div className="times_text_small">Sunset</div>
            <div className="times_text"><BiSun /><HiOutlineArrowNarrowDown /> 
            &nbsp;{data.forecast.forecastday[selected].astro.sunset}</div>
          </div>
        </div>
        <div className="times_box">
          <div className="times_inner_box">
            <div className="times_text_title">Moon</div>
            <div className="times_text_small">Moonrise</div>
            <div className="times_text"><BiMoon /><HiOutlineArrowNarrowUp /> 
            &nbsp;{data.forecast.forecastday[selected].astro.moonrise}</div>
          </div>
          <div className="times_inner_box">
            <div className="times_text_small">Moonset</div>
            <div className="times_text"><BiMoon /><HiOutlineArrowNarrowDown /> 
            &nbsp;{data.forecast.forecastday[selected].astro.moonset}</div>
          </div>
        </div>
        <div className="times_box">
          <div className="times_inner_box">
            <div className="times_text_title">Moon phase</div>
            <div className="times_text_small">
              {data.forecast.forecastday[selected].astro.moon_phase}</div>
            <div className="times_text">
              <span className="moon" id="New Moon"><WiMoonNew />&nbsp;</span>
              <span className="moon" id="Waxing Crescent"><WiMoonWaxingCrescent3/>&nbsp;</span>
              <span className="moon" id="First Quarter"><WiMoonFirstQuarter />&nbsp;</span>
              <span className="moon" id="Waxing Gibbous"><WiMoonWaxingGibbous6 />&nbsp;</span>
              <span className="moon" id="Full Moon"><WiMoonFull />&nbsp;</span>
              <span className="moon" id="Waning Gibbous"><WiMoonWaningGibbous2 />&nbsp;</span>
              <span className="moon" id="Last Quarter"><WiMoonThirdQuarter />&nbsp;</span>
              <span className="moon" id="Waning Crescent"><WiMoonWaningCrescent3 />&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="times_second_box">
      </div>
    </div>
  )
}

export default Times