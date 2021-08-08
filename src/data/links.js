import sunny from './sunny.jpg'
import clear from './clear.jpg'
import partly_cloudy from './partly_cloudy.jpg'
import partly_cloudy_night from './partly_cloudy_night.jpg'
import cloudy from './cloudy.jpg'
import cloudy_night from './cloudy_night.jpg'
import mist from './mist.jpg'
import mist_night from './mist_night.jpg'
import blowing_snow from './blowing_snow.jpg'
import blowing_snow_night from './blowing_snow_night.jpg'
import drizzle from './drizzle.jpg'
import drizzle_night from './drizzle_night.jpg'
import patchy_rain from './patchy_rain.jpg'
import patchy_rain_night from './patchy_rain_night.jpg'
import sleet from './sleet.jpg'
import sleet_night from './sleet_night.jpg'
import snow from './snow.jpg'
import snow_night from './snow_night.jpg'
import thunder from './thunder.jpeg'
import thunder_night from './thunder_night.jpg'

const pictures = {
  "Sunny":[sunny,""],
  "Clear": ["", clear],
  "Partly cloudy": [partly_cloudy, partly_cloudy_night],
  "Cloudy": [cloudy, cloudy_night],
  "Overcast": [partly_cloudy, partly_cloudy_night],
  "Mist": [mist, mist_night],
  "Patchy rain possible": [partly_cloudy, partly_cloudy_night],
  "Patchy snow possible": [partly_cloudy, partly_cloudy_night],
  "Patchy sleet possible": [partly_cloudy, partly_cloudy_night],
  "Patchy freezing drizzle possible": [partly_cloudy, partly_cloudy_night],
  "Thundery outbreaks possible": [partly_cloudy, partly_cloudy_night],
  "Blowing snow": [blowing_snow, blowing_snow_night],
  "Blizzard": [blowing_snow, blowing_snow_night],
  "Fog": [mist, mist_night],
  "Freezing fog": [mist, mist_night],
  "Patchy light drizzle": [partly_cloudy, partly_cloudy_night],
  "Light drizzle": [drizzle, drizzle_night],
  "Freezing drizzle": [drizzle, drizzle_night],
  "Heavy freezing drizzle": [drizzle, drizzle_night],
  "Patchy light rain": [patchy_rain, patchy_rain_night],
  "Light rain": [patchy_rain, patchy_rain_night],
  "Moderate rain at times": [patchy_rain, patchy_rain_night],
  "Moderate rain": [patchy_rain, patchy_rain_night],
  "Heavy rain at times": [patchy_rain, patchy_rain_night],
  "Heavy rain": [patchy_rain, patchy_rain_night],
  "Light freezing rain": [patchy_rain, patchy_rain_night],
  "Moderate or heavy freezing rain": [patchy_rain, patchy_rain_night],
  "Light sleet": [sleet, sleet_night],
  "Moderate or heavy sleet": [sleet, sleet_night],
  "Patchy light snow": [snow, snow_night],
  "Light snow": [snow, snow_night],
  "Patchy moderate snow": [snow, snow_night],
  "Moderate snow": [snow, snow_night],
  "Patchy heavy snow": [snow, snow_night],
  "Heavy snow": [snow, snow_night],
  "Ice pellets": [snow, snow_night],
  "Light rain shower": [patchy_rain, patchy_rain_night],
  "Moderate or heavy rain shower": [patchy_rain, patchy_rain_night],
  "Torrential rain shower": [patchy_rain, patchy_rain_night],
  "Light sleet showers": [sleet, sleet_night],
  "Moderate or heavy sleet showers": [sleet, sleet_night],
  "Light snow showers": [snow, snow_night],
  "Moderate or heavy snow showers": [snow, snow_night],
  "Light showers of ice pellets": [snow, snow_night],
  "Moderate or heavy showers of ice pellets": [snow, snow_night],
  "Patchy light rain with thunder": [thunder, thunder_night],
  "Moderate or heavy rain with thunder": [thunder, thunder_night],
  "Patchy light snow with thunder": [thunder, thunder_night],
  "Moderate or heavy snow with thunder": [thunder, thunder_night],
}

export default pictures