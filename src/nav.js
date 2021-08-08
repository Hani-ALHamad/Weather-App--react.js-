import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSun, BiMoon, BiCurrentLocation} from 'react-icons/bi'
import { AppContext } from './context'

const Nav = () => {
  const { 
    darkMode, 
    toggleDarkMode, 
    getLocation, 
    search, 
    changeSearch, 
    searchApi, 
    searchApiActive, 
    handleResultClick, 
    handleSubmit, 
    refreshing, 
    changeRefreshing } = useContext(AppContext)

  return (
    <div className="nav_container">
      <div className="nav_title">Weather<span className="nav_title_2">App</span></div>
      {darkMode ? 
        <button 
          className="nav_button" 
          onClick={() => toggleDarkMode("")}>
            <BiSun /><span className="nav_button_text"> &nbsp; Light Mode</span>
        </button>
        :
        <button 
          className="nav_button" 
          onClick={() => toggleDarkMode("dark_mode")}>
            <BiMoon />
            <span className="nav_button_text"> &nbsp; Dark Mode</span>
        </button>
      }
      
      <button 
        className="nav_button" 
        onClick={() => getLocation()}>
          <BiCurrentLocation />
          <span className="nav_button_text"> &nbsp; Use Location</span>
      </button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type="text" 
          value={search} 
          onChange={e => changeSearch(e.target.value)} 
          className="nav_input" 
          placeholder="Input your city"
        />
        <input 
          type="submit" 
          className="nav_submit" 
          value="Save" 
        />
        <div className="nav_search_results_box">
          {searchApiActive === true ? searchApi.map((item) => (
            <div 
              onClick={e => handleResultClick(e.target.innerHTML)} 
              key={item.id} 
              className="nav_search_results_item">
                {item.name}
            </div>
          )) : <></>}
        </div>
      </form>
      {refreshing[0] 
        ? 
        <div className={`nav_loading ${refreshing[2]}`}>
          {refreshing[1]} {refreshing[2] === "red" 
            ? 
            <button onClick={() => {changeRefreshing([false , "", ""])}} className="nav_x">
              <AiOutlineClose />
            </button> 
            : 
            <></>
            }
        </div> : <></>}
      

    </div>
  )
}

export default Nav