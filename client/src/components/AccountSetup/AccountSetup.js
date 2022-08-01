import React from 'react';
import './AccountSetup.css';

function AccountSetup() {
  return (
    <div className='setup-container'>
        <h1>Setup Your Account</h1>
        <p className='setup-labels'>Name</p>
            <input className='setup-input'></input>
        <p className='setup-labels'>Age</p>
            <input className='setup-input'></input>
        <p className='setup-labels'>Gender</p>
            <input className='setup-input'></input>
        <p className='setup-labels'>Breed</p>
            <input className='setup-input'></input>
        <p className='setup-labels'>About</p>
            <textarea rows="4" cols="40"></textarea>
        <p className='setup-labels'>Photos</p>    
            <input className='setup-input'></input>
        <p className='setup-labels'>Email</p>
            <input className='setup-input'></input>
        <p className='setup-labels'>Password</p>
            <input className='setup-input'></input>
        <p className='setup-labels'>Confirm Password</p>
            <input className='setup-input'></input>
        <button className='setup-button'>Submit</button>
    </div>
  )
}

export default AccountSetup