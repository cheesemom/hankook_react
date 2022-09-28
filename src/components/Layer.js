import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import '../css/Layer.scss';


const Layer = () => {
    useEffect(() => {
        Aos.init();
    })

    return (
        <section className="layer">
            <div className="inner">

                <div data-aos="fade-up" data-aos-duration="1500">
                    <div className="f_column">
                        <div className="cup">
                            <div className="con_img">
                                <img src={process.env.PUBLIC_URL + '/assets/img/grid_ss1.png'} alt="" />
                            </div>
                            <div className="con_txt">
                                <div className="more P"><a href="">PROUNA</a></div>
                            </div>
                        </div>

                        <div className="bloom">
                            <div className="con_img">
                                <img src={process.env.PUBLIC_URL + '/assets/img/grid_ss2.png'} alt="" />
                            </div>

                            <div className="con_txt">
                                <div className="more W"><a href="">WHITEBLOOM</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="s_column">
                        <div className="dish">
                            <div className="con_img">
                                <img src={process.env.PUBLIC_URL + '/assets/img/grid_ss3.png'} alt="" />
                            </div>
                        </div>
                        <div className="con_txt">
                            <div className="more T"><a href="">The CHEF</a></div>
                        </div>

                        <div className="lamp">
                            <div className="con_img">
                                <img src={process.env.PUBLIC_URL + '/assets/img/grid_ss4.png'} alt="" />
                            </div>
                            <div className="con_txt">
                                <div className="more A"><a href="">A.Mendini</a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Layer