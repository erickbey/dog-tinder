import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './ImageCarousel.css';

const ImageCarousel = ({slides, Sliderdata}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1);
    };

    if (!Array.isArray(slides) || slides.length<=0) {
        return null;
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left__arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right__arrow' onClick={nextSlide} />
            {Sliderdata.map((slide, index) => {
                return (
                    <div 
                    className={index===current ? 'slide active' : 'slide'} 
                    key={index}
                    >
                     {index===current && (
                            <img src={slide.image} alt='profile images of dog' className='img profile__picture'/>
                            )}
                        </div>
                    );
                })}
        </section>
    );
};
export default ImageCarousel;