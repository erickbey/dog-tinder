import React from 'react';
import './NavBar.css';
import { IoIosNotificationsOutline } from 'react-icons/io';

function NavBar() {
  return (
    <div className='navbar-container'>
        <h1 className='logo-title'>Throw Me a Bone</h1>
        <div className='icons-container'>
              <IoIosNotificationsOutline className='notification-icon'/>
            <div className='settings-icon-container'></div>
        </div>
    </div>
  )
}

export default NavBar