import React from 'react';
import './DogPreviewCard.css';
import NavBar from '../NavBar/NavBar';
import ChoiceButtons from '../ChoiceButtons/ChoiceButtons';
import Dog from '../../assets/FGoldendoodle.jpg';
import { MdOutlineLocationOn } from 'react-icons/md';

function DogPreviewCard() {
  return (
    <div className='app__container preview__card'>
      <NavBar />
      <div className="content__container friends__container">
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        <div className="friend-icon__container"></div>
        {/* add a map function for friends */}
      </div>
        <div className="content__container image-preview__container">
          <img src={Dog} alt="" className='profile__picture'/>
          <div className="info__container">
            <div className="blur__background">
              <h3 className='info__text'>Luna, 1.5 <span>(F) Golden-Doodle</span></h3>
              <p className='location__text'><MdOutlineLocationOn className='icon__small location'/> Columbus, Ohio</p>
            </div>
          </div>
        </div>
        <div className="buttons__container">
          <ChoiceButtons />
        </div>
    </div>
  )
}

export default DogPreviewCard