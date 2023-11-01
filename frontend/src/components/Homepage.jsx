import React from 'react'
import '../stylesheets/Homepage.css'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
const Homepage = () => {
  return (
    
    <div>
<div className='homepagebody' >
<div className='MIDDLEBOX'>
    <div className='REGISTERLINK'>
<Link className='MIDDLE' as={Link} to="/registration">Registration</Link> </div>
<div className='LOGINLINK'>
<Link className='MIDDLE' as={Link} to="/login">LOGIN</Link> </div>
</div>
</div>
    </div>
  )
}

export default Homepage