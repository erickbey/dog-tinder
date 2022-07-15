import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='login-container'>
        <h1 className='login-title'>
            <p className='label'>Email</p>
            <input className='inputs' type="text" />
            <p className='label'>Password</p>
            <input className='inputs' type="text" />
        </h1>
    </div>
  )
}

export default Login