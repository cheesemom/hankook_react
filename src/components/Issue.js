import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../css/Issue.scss';


const Issue = () => {
    useEffect(() => {
        Aos.init();
    })

    return (
        <section className="grid">
            <h2>HOT ISSUE</h2>
            <ul className="grid-container">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <li className="grid-item">
                        <img src={process.env.PUBLIC_URL + '/assets/img/Issue1.jpg'} alt="" />
                    </li>
                </div>
                <div data-aos="fade-up" data-aos-duration="1400">
                    <li className="grid-item">
                        <img src={process.env.PUBLIC_URL + '/assets/img/Issue2.jpg'} alt="" />
                    </li>
                </div>
                <div data-aos="fade-up" data-aos-duration="1800">
                    <li className="grid-item">
                        <img src={process.env.PUBLIC_URL + '/assets/img/Issue3.jpg'} alt="" />
                    </li>
                </div>
                <div data-aos="fade-up" data-aos-duration="2200">
                    <li className="grid-item">
                        <img src={process.env.PUBLIC_URL + '/assets/img/Issue4.jpg'} alt="" />
                    </li>
                </div>
                <div data-aos="fade-up" data-aos-duration="2600">
                    <li className="grid-item">
                        <img src={process.env.PUBLIC_URL + '/assets/img/Issue5.jpg'} alt="" />
                    </li>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <li className="grid-item">
                        <img src={process.env.PUBLIC_URL + '/assets/img/Issue6.jpg'} alt="" />
                    </li>
                </div>
            </ul>
        </section>
    )
}

export default Issue