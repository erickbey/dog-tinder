import './DogProfileCard.css';

import heartLogo from '../../images/heartLogo.svg';
import brokenHeart from '../../images/brokenHeart.svg';

function DogProfileCard() {
    const handleLikeButton = () => {
        // some logic to handle the like button
    }

    const handleDislikeButton = () => {
        // some logic to handle the dislike button
    }

    const handlePreviousImage = () => {
        // Some logic to handle previous image
    }

    const handleNextImage = () => {
        // Some logic to handle previous image
    }


  return (
    <div className='container card-container'>
        <h1 className='card-title'>Luna</h1>
        <div className='image-container'>
            <div className='image'></div>
            <button className='previous-image-button' onClick={handlePreviousImage} >←</button>
            <button className='next-image-button'onClick={handleNextImage} >→</button>
        </div>
        <h2 className='about'>Age: 1.5</h2>
        <h2 className='about'>Gender: Female</h2>
        <h2 className='about'>Breed: Goldendoodle</h2>
        <section className='bio'>This is going to be a small section that will display something about the dog and their personality.</section>
        <div className='buttons-container'>
            <button className='choice-button like' onClick={handleLikeButton} >
                <img className='button-icon' src={heartLogo} alt='heart' />
            </button>
            <button className='choice-button dislike' onClick={handleDislikeButton} >
                <img className='button-icon' src={brokenHeart} alt='broken heart' />
            </button> 
        </div>
    </div>
  )
}

export default DogProfileCard