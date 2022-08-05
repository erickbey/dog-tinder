import React from 'react';
import './AccountSetup.css';
import NavBar from '../NavBar/NavBar'

function AccountSetup() {
  return (
    <div className="App">
        <div className="app__container">
            <NavBar />
            <div className='content__container setup'>
                <h1 className='setup__title'>Setup Your Account</h1>
                <p className='setup__labels'>Name</p>
                    <input className='setup__input'></input>
                <p className='setup__labels'>Age</p>
                    <input className='setup__input'></input>
                <p className='setup__labels'>Gender</p>
                    <input className='setup__input'></input>
                <p className='setup__labels'>Breed</p>
                    <input className='setup__input'></input>
                <p className='setup__labels'>About</p>
                    <textarea rows="4" cols="40"></textarea>
                <p className='setup__labels'>Photos</p>    
                    <input className='setup__input'></input>
                <p className='setup__labels'>Email</p>
                    <input className='setup__input'></input>
                <p className='setup__labels'>Password</p>
                    <input className='setup__input'></input>
                <p className='setup__labels'>Confirm Password</p>
                    <input className='setup__input'></input>
                <button className='submit__button'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default AccountSetup