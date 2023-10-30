import React, {useState} from 'react'
import Skillaction from './Skillaction'

const Actionbar = () => {

const [hidden, setHidden] = useState(true)

const handleHide = () => {
    if(hidden){
        setHidden(false)
    }
    if(!hidden){
        setHidden(true)
    }
}
  return (

    <div>
        <button>Proficiency</button>
        <button onClick={handleHide}> Skills</button>
        {!hidden ? (
        <div >
        <Skillaction/>
        </div>) 
         : null
         }
    </div>
  )
}

export default Actionbar