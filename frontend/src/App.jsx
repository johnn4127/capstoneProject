import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbars from './components/Navbars'
import Profile from './components/Profile'
import Login from './components/Login'
import Registration from './components/Registration'
import Game from './components/Game'
import Shop from './components/Shop'
import Actionbar from './components/Actionbar'
import Battle from './components/Battle'
import Intro from './components/Intro'

import Homepage from './components/Homepage'
const App = () => {
  return (
    <div>
      <Routes>

      <Route path='/' element= {<Homepage/>}/>
      <Route path='*' element= {<Homepage/>}/>
      <Route path='/registration' element= {<Registration/>}/>
      <Route path='/profile' element= {<Profile/>}/>
      <Route path='/game' element= {<Game />}/>
      <Route path='/shop' element= {<Shop />}   />
      <Route path='/actionbar' element= {<Actionbar/>}/>
      <Route path='/profile' element={<Profile />} />
      <Route path='/battle' element={<Battle />} />
      <Route path='/login' element={<Login />} />
      <Route path='/intro' element={<Intro />} />

      
      </Routes>
    </div>
  )
}

export default App