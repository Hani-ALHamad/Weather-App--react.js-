import Current from './current'
import Days from './days'
import Hours from './hours'
import Nav from './nav'
import Times from './times'
import './index.css'
import { AppContext } from './context'
import { useContext } from 'react'



const App = () => {
  const {data} = useContext(AppContext)
  if(data.length === 0){
    return(
      <main>
        <div className="container">
          <div className="on_loading">Loading...</div>
        </div>
      </main>
    )
  }

  return(
    <main>
        <div className="container">
          <div className="background-img">
          <Nav />
          <Current />
          </div>
          <div className="app_text">Daily</div>
          <Days />
          <div className="app_text">Hourly</div>
          <Hours />
          <div className="app_text">Sun and Moon times</div>
          <Times />
        </div>
    </main>
  )

}

export default App