import React from 'react';
import './NavBar.css';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BiBone } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';

function NavBar() {
  return (
    <div className='container navbar__container'>
      <button className='btn options__btn'>
        <CgMenuGridO className='icon__medium options'/>
      </button>
        <h1 className='title'>Throw Me a Bone <BiBone className='icon__small'/></h1>
        <div className='icons__container'>
          <button className='btn'>
            <IoIosNotificationsOutline className='icon__medium'/>
          </button>
            <div className='settings-icon-container'></div>
        </div>
    </div>
  )
}

export default NavBar