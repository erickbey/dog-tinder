import './DogProfileCard.css';
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import Dog from '../../assets/FGoldendoodle.jpg';
import Dog1 from '../../assets/GD-2.jpg';
import Dog2 from '../../assets/goldendoodle-playing.jpg';
import ChoiceButtons from '../ChoiceButtons/ChoiceButtons';
import { FaRegHeart } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar';
import ImageCarousel from '../ImageCarousel/ImageCarousel';


function DogProfileCard() {
  const slides = [Dog, Dog1, Dog2];
  const sliderData = [{image: Dog}, {image: Dog1}, {image: Dog2}]
  
  return (
    <div className='app__container profile__card'>
      <NavBar />
        <div className="content__container image-profile__container">
          {/* <img src={Dog} alt="dog" className='profile__picture' /> */}
          <ImageCarousel slides={slides} Sliderdata={sliderData} />
          <button className="btn back__btn"><IoIosArrowBack className='icon__small back'/></button>
        </div>
        <div className="content__container main__info">
          <div>
          <h3>Luna, 1.5 <span>(F) Golden-Doodle</span></h3>
          <p className='location__text'><MdOutlineLocationOn className='icon__small location'/> Columbus, Ohio</p></div>
          <div className="likes__container">
            <p>20 <FaRegHeart className='icon__smaller likes'/></p>
          </div>
        </div>
        <div className="content__container bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, repellat ipsum, suscipit quis tempore voluptates, excepturi placeat officia illo non ipsa corporis voluptatem dolorum dolores quas impedit dicta natus accusamus?</div>
        <div className="content__container interests">what kind of friend you are looking for</div>
        <div className="buttons__container">
          <ChoiceButtons />
        </div>
    </div>
  )
}

export default DogProfileCard