import React from "react";
import '../css/CS.scss';
// import YouTube from "react-youtube";


const CS = () => {

    // const opts = {
    //     height: '220',
    //     width: '400',
    //     playerVars: {
    //         autoplay: 1,
    //         modestbranding: 1
    //     }
    // };


    return (
        <section class="cs">
            <h2>CUSTOMER SERVICE</h2>
            <div className="row">

                {/* <div className="left">
                    <div className="video">
                        <YouTube videoId={"bhLcemPEcdM"} opts={opts} className='u' />
                    </div>
                </div> */}

                <div className="mid">
                    <div className="cs_txt">
                        <h3>STORE</h3>
                        <span className="more"><a href="">more</a></span>
                    </div>

                    <table className="type04" width="300">
                        <tr>
                            <th scope="row">본사사옥점(서울사옥점)</th>
                            <td>02-1111-0000</td>
                        </tr>
                        <tr>
                            <th scope="row">삼선교점(서울총판)</th>
                            <td>02-1111-0000</td>
                        </tr>
                        <tr>
                            <th scope="row">인천점</th>
                            <td>02-1111-0000</td>
                        </tr>
                        <tr>
                            <th scope="row">수안보파크호텔점</th>
                            <td>02-1111-0000</td>
                        </tr>
                    </table>
                </div>

                <div className="right">
                    <div className="output">
                        <h3 style>C/S CENTER</h3>
                    </div>
                    <div className="customer">
                        <ul>
                            <li>
                                <i className="xi-call"></i>
                                <span>T. 080.262.5251 / F. 043.262.5215 </span>
                            </li>
                            <li>
                                · Mon~Friday : AM 9:00 ~ PM 5:00
                                · Sat. Sun. Holiday OFF
                                · E-mail : webmaster@hankook.com
                                · 업무 시간 외에는 E-mail로 문의 바랍니다.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CS