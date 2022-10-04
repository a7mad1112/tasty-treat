import React from 'react'
import Slider from "react-slick";
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import '../../../styles/slider.css';
const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        Infinity: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return <Slider {...settings}>
        <div>
            <p className="review__text">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam accusamus alias quidem incidunt nam consequatur facere fugiat delectus, perferendis a! Consequatur obcaecati ipsum modi. Omnis sint repellendus officia temporibus labore."
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img className=' ' src={ava01} alt="avatar" />
                <h6>Jhon Doe</h6>
            </div>
        </div>

        <div>
            <p className="review__text">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam accusamus alias quidem incidunt nam consequatur facere fugiat delectus, perferendis a! Consequatur obcaecati ipsum modi. Omnis sint repellendus officia temporibus labore."
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img className=' ' src={ava02} alt="avatar" />
                <h6>Mitchell Marsh</h6>
            </div>
        </div>

        <div>
            <p className="review__text">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam accusamus alias quidem incidunt nam consequatur facere fugiat delectus, perferendis a! Consequatur obcaecati ipsum modi. Omnis sint repellendus officia temporibus labore."
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img className=' ' src={ava03} alt="avatar" />
                <h6>Steven Crock</h6>
            </div>
        </div>
    </Slider>
}

export default TestimonialSlider