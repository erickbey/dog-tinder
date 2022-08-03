import React from 'react';
import './Login.css';
import { BiBone } from 'react-icons/bi';

function Login() {
  return (
    <div className="app__container">
      <h1 className='login__title'>Throw Me a Bone <BiBone className='icon__large bone'/></h1>
      <div className='content__container login__container'>
          <p className='label'>Email</p>
          <input className='inputs' type="text" />
          <p className='label password'>Password</p>
          <input className='inputs' type="text" />
          <button className='btn login__button'><span className='login__text'>Login</span></button>
      </div>
    </div>
  )
}

export default Login