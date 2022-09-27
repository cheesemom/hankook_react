import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { main_content } from '../data/common'
import '../css/MainSlide.scss'


const MainSlide = () => {
    const MainSlide = useRef(null);

    return (
        <div className='MainSlide'>
            <Slider
                arrows={false}
                autoplay={{ delay: 2500 }}
                pauseOnHover={false}
                ref={MainSlide}
                dots={true}
            >
                {
                    main_content.slice(0, 5).map((it, idx) => {
                        return (
                            <figure className={`itm itm0${idx + 1}`}>
                            </figure>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default MainSlide