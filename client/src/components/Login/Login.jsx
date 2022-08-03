import React from 'react';
import './Login.css';
import { BiBone } from 'react-icons/bi';
import NavBar from '../NavBar/NavBar';

function Login() {
  return (
    <div className="app__container">
      <NavBar />
      <div className='content__container login__container'>
          <p className='label'>Email</p>
          <input className='inputs' type="text" />
          <p className='label password'>Password</p>
          <input className='inputs' type="text" />
          <button className='btn submit__button'><span className='login__text'>Login</span></button>
          <p className='signup__text'>Not a member yet? Sign-Up <a>Here!</a></p>
      </div>
    </div>
  )
}

export default Login