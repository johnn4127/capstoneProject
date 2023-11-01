import React, { useState,useEffect } from 'react';
import mp3 from '../assets/music/Registration.mp3'


function RegisterForm() {
  
  const audio = new Audio(mp3)

  

  const [formData, setFormData] = useState({
   
    email: '',
    password: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    
    
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  };
  useEffect(()=>{
    audio.play()
  }, [])
  return (
    <div>
      <h2>User Registration</h2>
      <form>
       
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {/* <input
          type="text"
          name="charName"
          placeholder="Character Name"
          value={formData.charName}
          onChange={handleInputChange}
        /> */}
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      


    </div>
  );
}

export default RegisterForm;