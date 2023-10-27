import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbars from './components/Navbars'
import Profile from './components/Profile'
import Login from './components/Login'
import Registration from './components/Registration'
import Game from './components/game/Game'
import Actionbar from './components/Actionbar'
const App = () => {
  return (
    <div>
      <Navbars/>


      <Routes>

      <Route path='/' element= {<Login/>}/>
      <Route path='/registration' element= {<Registration/>}/>
      <Route path='/profile' element= {<Profile/>}/>
      <Route path='/game' element= {<Game />}/>
      <Route path='/actionbar' element= {<Actionbar/>}/>

      
      </Routes>
    </div>
  )
}

export default App