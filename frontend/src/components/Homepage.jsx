import React from 'react';
import '../stylesheets/Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='homepagebody'>
      <div className='HOMEPAGETITLE'>
        <h1 className='ACTUALTITLE'>CODING PURSUIT</h1>
      </div>
      <div className='MIDDLEBOX'>
        <div className='REGISTERLINK'>
          <Link  style={{textDecoration:"none"}}  className='MIDDLE' as={Link} to="/registration">Registration</Link>
        </div>
        <div className='LOGINLINK'>
          <Link  style={{textDecoration:"none"}} className='MIDDLE' as={Link} to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
