import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../css/Mid.scss';


const Mid = () => {
    useEffect(() => {
        Aos.init();
    })

    return (
        <section className="mid">
            <div data-aos="fade-up" data-aos-duration="2000">
                <div className="second">
                    <img src={process.env.PUBLIC_URL + '/assets/img/mid.png'} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Mid