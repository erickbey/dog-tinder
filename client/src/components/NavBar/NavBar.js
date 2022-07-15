import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar-container'>
        <h1 className='logo-title'>Throw Me a Bone</h1>
        <div className='icons-container'>
            <div className='profile-icon-container'></div>
            <div className='settings-icon-container'></div>
        </div>
    </div>
  )
}

export default NavBar