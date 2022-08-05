import React from 'react';
import './AccountSetup.css';
import NavBar from '../NavBar/NavBar'
import { useState } from 'react';
import axios from 'axios';

function AccountSetup() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [breed, setBreed] = useState("");
    const [about, setAbout] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        const data = await axios.post('http://localhost:5000/api/v1/users/signup', {
          name,
          age,
          gender,
          breed,
          about,
          email,
          password,
          passwordConfirm
        })
    
        console.log(data)
      }

  return (
    <div className="App">
        <div className="app__container">
            <NavBar />
            <form onSubmit={handleOnSubmit}>
                <div className='content__container setup'>
                    <h1 className='setup__title'>Setup Your Account</h1>
                    <p className='setup__labels'>Name</p>
                        <input className='setup__input' onChange={(e) => setName(e.target.value)}></input>
                    <p className='setup__labels'>Age</p>
                        <input className='setup__input' onChange={(e) => setAge(e.target.value)}></input>
                    <p className='setup__labels'>Gender</p>
                        <input className='setup__input' onChange={(e) => setGender(e.target.value)}></input>
                    <p className='setup__labels'>Breed</p>
                        <input className='setup__input' onChange={(e) => setBreed(e.target.value)}></input>
                    <p className='setup__labels'>About</p>
                        <textarea rows="4" cols="40" onChange={(e) => setAbout(e.target.value)}></textarea>
                    <p className='setup__labels'>Email</p>
                        <input className='setup__input' onChange={(e) => setEmail(e.target.value)}></input>
                    <p className='setup__labels'>Password</p>
                        <input type='password' className='setup__input' onChange={(e) => setPassword(e.target.value)}></input>
                    <p className='setup__labels'>Confirm Password</p>
                        <input type='password' className='setup__input' onChange={(e) => setPasswordConfirm(e.target.value)}></input>
                    <button type='submit' className='submit__button'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AccountSetup