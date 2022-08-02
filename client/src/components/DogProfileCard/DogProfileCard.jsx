import './DogProfileCard.css';
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import Dog from '../../assets/FGoldendoodle.jpg';
import ChoiceButtons from '../ChoiceButtons/ChoiceButtons';
import { FaRegHeart } from 'react-icons/fa';


function DogProfileCard() {
  return (
    <div className='body__container profile__card'>
        <div className="image__container">
          <img src={Dog} alt="dog" className='profile__picture' />
          <button className="btn back__btn"><IoIosArrowBack className='icon__small back'/></button>
        </div>
        <div className="info__container main__info">
          <div>
          <h3>Luna, 1.5 <span>(F) Golden-Doodle</span></h3>
          <p className='location__text'><MdOutlineLocationOn className='icon__small location'/> Columbus, Ohio</p></div>
          <div className="likes__container">
            <p>20 <FaRegHeart className='icon__smaller'/></p>
          </div>
        </div>
        <div className="info__container bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, repellat ipsum, suscipit quis tempore voluptates, excepturi placeat officia illo non ipsa corporis voluptatem dolorum dolores quas impedit dicta natus accusamus?</div>
        <div className="interest__container">what kind of friend you are looking for</div>
        <div className="buttons__container">
          <ChoiceButtons />
        </div>
    </div>
  )
}

export default DogProfileCard