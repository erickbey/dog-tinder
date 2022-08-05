import React from 'react';
import './Login.css';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    const data = await axios.post('http://localhost:5000/api/v1/users/login', {
      email,
      password
    })

    console.log(data)
  }


  return (
    <div className="App">
      <div className="app__container">
        <NavBar />
        <div className='content__container login__container'>
          <form onSubmit={handleOnSubmit}>
            <p className='label'>Email</p>
            <input className='inputs' type="text" onChange={(e) => setEmail(e.target.value)}/>
            <p className='label password'>Password</p>
            <input className='inputs' type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' className='btn submit__button'><span className='login__text'>Login</span></button>
            <p className='signup__text'>Not a member yet? Sign-Up <Link to='/register'>Here!</Link></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login