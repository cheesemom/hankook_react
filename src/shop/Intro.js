import React from 'react'
import '../css/ShopDetail.scss';
import MainNav from '../components/MainNav';


const Intro = () => {

    return (
        <section className='shopIntro'>

            <div className="SubArea">
                <div className="con" style="background-image: url(../img/hankook/sub_intro_main.jpg);">
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
                    <h2>COMPANY</h2>
                    <ul>
                        <li class="cc"><a href="">회사소개</a></li>
                        <li class="on"><a href="">회사연혁</a></li>
                        <li class="on"><a href="">계열사</a></li>
                        <li class="on"><a href="">오시는길</a></li>
                    </ul>
                </div>
            </div>


            <div className="Sub_tit">
                <div className="tit_page">
                    <h2>회사소개</h2>
                </div>
                <div className="tit_txt">
                    <div className="box">
                        <div className="comTxt">
                            <h3>행복을 담는 기업</h3>
                            <p>
                                한국도자기는 국내 생산을 원칙으로 하며, 천연원료(본애쉬)를 사용, 까다롭고 엄격한 정제과정을 통한 최고 재료만의 제품을 생산합니다.
                                특히 천연원료인 본애쉬를 국제적 기준치보다 높은 수준으로 사용하여 가볍고 단단하며 투광성과 보온성이 매우 우수하여 전세계적으로 그 품질을 인정받고 있습니다.
                            </p>
                            <p><em>Creating Value, Hankook Chinaware</em></p>
                        </div>
                        <div className="comImg">
                            <a href="">
                                <img src={process.env.PUBLIC_URL + '/assets/img/sub_img01.jpg'} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="comTxt">
                            <h3>Since 1943</h3>
                            <p>
                                한국도자기는 1943년 충북에서 시작해 현재 전세계 50여개국에 수출하는 최정상급 글로벌 도자기 브랜드로 성장하여 세계적인 명성과 기술력을 지닌 한국 대표 브랜드로 나아가고 있습니다.
                                한국도자기는 최첨단 공법의 자동화 시설에서 정제된 천연원료만을 사용한 고품격의 정통 본차이나 식기를 생산합니다.
                            </p>
                            <p className="aa">국내 생산의 일괄제작 방식 고수, 기준치를 훨씬 웃도는 고밀도의 천연 본애쉬 사용, 친환경식기에 대한 끊임없는 연구개발, 수십년 노하우의 장인정신은 한국도자기를 최정상에
                                우뚝서게 한
                                원동력입니다.</p>
                        </div>
                        <div className="comImg">
                            <a href="">
                                <img src={process.env.PUBLIC_URL + '/assets/img/sub_img02.jpg'} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="comTxt">
                            <h3>DECAL 사업</h3>
                            <p className="aa">
                                한국도자기는 1980년도부터 전사지 인쇄(Decal) 사업을 시작하여 최상급의 원료로 최고의 품질을 관리하고 있습니다.
                                10여대의 자동화 기계를 가동하는 세계적으로 가장 큰 인쇄 공장 중의 하나로 색분해 및 칼라매칭, 안료 안정성 테스트, 전사지 생산 및 검사 포장 등의 절차로
                                완벽한 인쇄 품질을 위해 끊임없이 노력하고 있습니다.
                                또한, 해외의 명성 높은 웨지우드, 레녹스, 로얄코펜하겐, 로얄덜튼, 포트메리온, 로얄알버트 등의 수많은 바이어들과 우수한 비즈니스 관계를 갖추고 있습니다.
                            </p>
                        </div>
                        <div className="comImg">
                            <a href="">
                                <img src={process.env.PUBLIC_URL + '/assets/img/sub_img03.jpg'} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="center">
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <h4>"한국도자기는 <span class="bb" style="color: black; font-size: 22px;">풍요롭고 행복한 리빙문화를 제안</span>합니다."</h4>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub_bottom.jpg'} alt="" height="800px" width="100%" />
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Intro