import React from 'react'
import '../css/Footer.scss';


const Footer = () => {
    return (
        <section className="footer">
            <div className="inner">

                <div className="top">
                    <div className="banner">
                        <ul className="f_banner">
                            <li><a href="">HOME</a></li>
                            <li><a href="">CS CENTER</a></li>
                            <li><a href="">STORE</a></li>
                            <li><a href="">SITE MAP</a></li>
                        </ul>
                    </div>
                    <div className="info">
                        <dl>
                            <dd>COMPANY : 한국도자기(주), OWNER : 김영신 , TEL : 043-262-5251 , FAX : 043-262-5215
                            </dd>
                            <dd>ADDRESS : 청주시 흥덕구 월명로 55번길 100</dd>
                            <dd>개인정보관리책임자 : 김영신 , E-MAIL : webmaster@hankook.com</dd>
                            <dd>BUSINESS LICENSE : 315-81-00274, A MAIL-ORDER BUSINESS REPORT : 제
                                2016-충북청주-0053호
                                [사업자정보확인]</dd>
                            <dd>COPYRIGHT (c) 한국도자기, ALL RIGHTS RESERVED.</dd>
                        </dl>
                    </div>
                    <p className="copyright">본 사이트에 사용 된 모든 이미지와 내용의 무단도용을 금지 합니다.</p>
                </div>

                <div className="bottom">
                    <div className="info">
                        <div className="family_link">
                            <select id="fl">
                                <option value="">family link</option>
                                <option value="">수안보파크호텔</option>
                                <option value="">프라우나</option>
                                <option value="">화이트블룸</option>
                            </select>
                        </div>
                        <div className="bottom_logo">
                            <img src={process.env.PUBLIC_URL + '/assets/img/bottom_logo.png'} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Footer