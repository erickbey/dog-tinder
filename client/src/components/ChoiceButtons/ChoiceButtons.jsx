import React from 'react';
import './ChoiceButtons.css';
import { IoMdClose } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

function ChoiceButtons() {
  return (
    <div className='choice-btns__container'>
        <button className="btn choice__btn-secondary dislike__btn"><IoMdClose className='secondary__icon' /></button>
        <button className="btn choice__btn-main like__btn"><FaRegHeart className='main__icon'/></button>
        <button className="btn choice__btn-secondary message__btn"><AiOutlineStar className='secondary__icon' /></button>
    </div>
  )
}

export default ChoiceButtons