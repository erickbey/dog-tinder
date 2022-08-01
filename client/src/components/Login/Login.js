import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='login-container'>
        <h1 className='login-title'>Login</h1>
        <p className='label'>Email</p>
        <input className='inputs' type="text" />
        <p className='label'>Password</p>
        <input className='inputs' type="text" />
        <button className='login-button'>Login</button>
    </div>
  )
}

export default Login