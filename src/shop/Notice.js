import React from 'react'
import '../css/ShopDetail.scss';
import MainNav from '../components/MainNav';


const Notice = () => {

    return (
        <section className='shopNotice'>

            <div className="SubArea">
                <div className="con" style="background-image: url(../../public/assets/img/sub_notice_main.jpg);">
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <p>
                            "Creating Value, Hankook Chinaware"
                            "생활의 가치를 높이는 작은 차이, 한국도자기"
                        </p>
                    </div>
                </div>
            </div>


            <div className="sub_bg">
                <div className="sub_menu">
                    <h2>CUMMUNITY</h2>
                    <ul>
                        <li className="cc"><a href="">Notice</a></li>
                        <li className="on"><a href="">Magazine</a></li>
                        <li className="on"><a href="">Media</a></li>
                    </ul>
                </div>
            </div>


            <div className="Sub_tit">
                <div className="tit_page">
                    <h2>Notice</h2>
                </div>

                <div className="notice_tab">

                    <table className="type">
                        <thead>
                            <tr className="name">
                                <th>번호</th>
                                <th>출처</th>
                                <th>제목</th>
                                <th>작성일자</th>
                                <th>조회수</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>95</td>
                                <td>매일경제</td>
                                <td className="tit_notice"><a href="#">신제품 혼수 그룻 '콩트 시리즈'</a></td>
                                <td>2022-11-11</td>
                                <td>188</td>
                            </tr>

                            <tr>
                                <td>94</td>
                                <td>동양일보</td>
                                <td className="tit_notice"><a href="#">프리미엄 신제품 젬컷 출시</a></td>
                                <td>2022-09-09</td>
                                <td>185</td>
                            </tr>

                            <tr>
                                <td>93</td>
                                <td>매일경제</td>
                                <td className="tit_notice"><a href="#">한국도자기, 연희점 리뉴얼 개점</a></td>
                                <td>2022-07-07</td>
                                <td>176</td>
                            </tr>

                            <tr>
                                <td>92</td>
                                <td>여성신문</td>
                                <td className="tit_notice"><a href="#">여성이 뽑은 최고의 명품대상 수상</a></td>
                                <td>2022-07-15</td>
                                <td>171</td>
                            </tr>

                            <tr>
                                <td>91</td>
                                <td>연합뉴스</td>
                                <td className="tit_notice"><a href="#">어린이날 기념, 어린이 식기 출시</a></td>
                                <td>2022-05-05</td>
                                <td>169</td>
                            </tr>

                            <tr>
                                <td>90</td>
                                <td>이코노텔링</td>
                                <td className="tit_notice"><a href="#">핸드크래프트 기법 적용 도자기세트</a></td>
                                <td>2022-03-03</td>
                                <td>167</td>
                            </tr>

                            <tr>
                                <td>89</td>
                                <td>연합뉴스</td>
                                <td className="tit_notice"><a href="#">2022년 호랑이의 해, 달력접시</a></td>
                                <td>2022-01-01</td>
                                <td>163</td>
                            </tr>

                            <tr>
                                <td>88</td>
                                <td>여성신문</td>
                                <td className="tit_notice"><a href="#">2021년 상호존중하는 좋은 경영대상, 한국도자기</a></td>
                                <td>2021-12-12</td>
                                <td>150</td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="pagenation">
                        <a href="#" class="firstpage pbtn">
                            <img src={process.env.PUBLIC_URL + '/assets/img/btn_firstpage.png'} alt="첫페이지로 이동" />
                        </a>
                        <a href="#" class="prevpage pbtn">
                            <img src={process.env.PUBLIC_URL + '/assets/img/btn_prevpage.png'} alt="이전 페이지로 이동" />
                        </a>
                        <a href="#">
                            <span class="pagenum currentpage">1</span>
                        </a>
                        <a href="#">
                            <span class="pagenum">2</span>
                        </a>
                        <a href="#">
                            <span class="pagenum">3</span>
                        </a>
                        <a href="#">
                            <span class="pagenum">4</span>
                        </a>
                        <a href="#">
                            <span class="pagenum">5</span>
                        </a>
                        <a href="#" class="nextpage pbtn">
                            <img src={process.env.PUBLIC_URL + '/assets/img/btn_nextpage.png'} alt="다음 페이지로 이동" />
                        </a>
                        <a href="#" class="lastpage pbtn">
                            <img src={process.env.PUBLIC_URL + '/assets/img/btn_lastpage.png'} alt="마지막 페이지로 이동" />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Notice