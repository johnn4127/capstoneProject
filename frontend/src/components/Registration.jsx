import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/Registration.css'

const Registration = () => {
  const [formData,setFormData]= useState({email:'',password:''})
  const handleFormSubmit = async (e)=>{e.preventDefault()
  
  
  };
  return (
    <div id='registration'>
      <Form onSubmit={handleFormSubmit}>
      <h1>Registration</h1>
      
        <Form.Group className='formField'>
          <Form.Label for='email'>Email</Form.Label>
          <Form.Control value={email}
            onChange={(e) => setName(e.target.value)} type='text' name='email' placeholder='Enter email address...'></Form.Control>
        </Form.Group>

        <Form.Group className='formField'>
          <Form.Label for='password'>Password</Form.Label>
          <Form.Control value={password}
            onChange={(e) => setName(e.target.value)} type='password' name='password' placeholder='Enter password...'></Form.Control>
        </Form.Group>

        <Form.Group className='formField'>
          <Form.Label for='password2'>Re-Enter Password</Form.Label>
          <Form.Control type='password' name='password2' placeholder='Re-enter password...' min='8' ></Form.Control>
        </Form.Group>
      


        <Button variant='primary' type='submit'>Submit</Button>

      </Form>
    </div>
  )
}


export default Registration