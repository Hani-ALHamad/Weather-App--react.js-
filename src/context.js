import React, { useState, useEffect,createContext, useCallback } from 'react'
import links from './data/links'

export const AppContext = createContext()


const Context = ({children}) => {
  // states
  const [darkMode, toggleDarkMode] = useState("")
  const [data, changeData] = useState("")
  const [fahrenheit, toggleFahrenheit] = useState("c")
  const [update, changeUpdate] = useState("")
  const [selected, changeSelected] = useState(0)
  const [search, changeSearch] = useState("")
  const [searchApi, changeSearchApi] = useState([])
  const [searchApiActive, changeSearchApiActive] = useState(false)
  const [city, changeCity] = useState(window.localStorage.getItem("city"))
  const [refreshing, changeRefreshing] = useState([false, "", ""])


// function that fetches the data from api
  const getData = useCallback(async() => {
    changeRefreshing([true, "Loading...", "blue"])
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d1680e6136df4932bc6145116212707&q=${city}&days=10&aqi=no&alerts=no`)
      const jsoned = await response.json()
      if(!jsoned.error){
        changeData(jsoned)
        window.localStorage.setItem("city", String(`${jsoned.location.name}, ${jsoned.location.country}`))
        changeRefreshing([false, "", ""])
      }

      const date_now = Date.now()
      changeUpdate([
        jsoned.location.localtime, 
        new Date((date_now + 3600000)).toString().split(" ")[4]
      ])
    } catch (error) {
      console.log(error)
      changeRefreshing([
        true, "Network/API error, check your internet connection or change the city name you entered.", "red"
      ])
    }
  },[city])

// function that fetches search api data
  const getSearch = useCallback(async() => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=d1680e6136df4932bc6145116212707&q=${search}`)
      const jsoned = await response.json()
      changeSearchApi(jsoned)
    } catch (error) {
      console.log(error)
    }
  },[search])

  // get location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition, showPositionError)
  }

  const showPosition = (position) => {
    const x =  `${position.coords.latitude}, ${position.coords.longitude}`
    changeCity(x)
  }

  const showPositionError = (error) => {
    changeRefreshing([true, `${error.message}`, "red"])
  }

  // save button
  const handleResultClick = (e) => {
    changeSearch(e)
    changeSearchApiActive(false)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if(search.length > 0){
      changeCity(search)
      changeSearchApiActive(false)
      changeSearch("")
    }
  }
// refresh button
  const handleRefresh = () => {
    getData()
  }
// to rerender whenever a change happens to search
  useEffect(() => {
    getSearch()
  },[search, getSearch])

  useEffect(() => {
    if(searchApi.length > 0 && !search.includes(",")){
      changeSearchApiActive(true)
    } else {
      changeSearchApiActive(false)
    }
  }, [searchApi])

// rerender when dark and light mode changes or when data changes, for moon phases
  useEffect(() => {
    if(darkMode){
      var color = "white";
    } else {
      color = "black";
    }
      document.querySelectorAll(".moon").forEach((item) =>{
        if (item.id === data.forecast.forecastday[selected].astro.moon_phase){
          item.style.color = "#5499C7"
        } else {
          item.style.color = color;
        }
      })
  },[selected, data, darkMode])

  // rerender to change the background without refreshing
  useEffect(() =>{
    if(data.length !== 0){
      document.getElementsByClassName("background-img")[0].style.background = 
      `url(${links[data.current.condition.text][((data.current.is_day) - 1) * -1] }) no-repeat center`
      document.getElementsByClassName("background-img")[0].style.backgroundSize = "cover"
    }
  }, [data])

  // fetches data whenever city name changes to a valid name
  useEffect(() => {
    getData()
  }, [city])

// for local storage, only once
  useEffect(() =>{
    if(!window.localStorage.getItem("f")){
      window.localStorage.setItem("dark", "")
      window.localStorage.setItem("f", "c")
      window.localStorage.setItem("city", "london")
    } else {
      toggleDarkMode(window.localStorage.getItem("dark"))
      toggleFahrenheit(window.localStorage.getItem("f"))
      changeCity(window.localStorage.getItem("city"))
    }
  },[])

  useEffect(() => {
    window.localStorage.setItem("f", fahrenheit)
  },[fahrenheit])

  useEffect(() =>{
    window.localStorage.setItem("dark", darkMode)
    document.documentElement.setAttribute("class", darkMode)
  },[darkMode])

  // auto update, hourly
  useEffect(() => {
    const interval = setInterval(() => {
      getData()
    }, 3600000);
    return () => clearInterval(interval);
  }, [getData]);

  return (
    <AppContext.Provider value={{
      darkMode,
      toggleDarkMode,
      data,
      fahrenheit,
      toggleFahrenheit,
      update,
      selected,
      changeSelected,
      getLocation,
      search,
      changeSearch,
      searchApi,
      searchApiActive,
      handleResultClick,
      handleSubmit,
      handleRefresh,
      refreshing,
      changeRefreshing
    }}>
      {children}
    </AppContext.Provider>

  )
}

export default Context