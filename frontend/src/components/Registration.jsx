import React from 'react'

const Registration = () => {
  return (
    <div id='registration'>
      <form>
        <fieldset>

        <label for='email'>Email</label>
        <input type='text' name='email'></input>

        <label for='password'>Password</label>
        <input type='password' name='password'></input>

        <label for='password2'>Re-Enter Password</label>
        <input type='password' name='password2' min='8' ></input>

        </fieldset>

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}


export default Registration