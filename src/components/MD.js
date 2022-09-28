import React from "react";
import '../css/MD.scss';


const MD = () => {
    return (
        <section className="MD">
            <div className="row">

                <div className="left_pick">
                    <div className="gallery">
                        <h3>MD's PICK</h3>
                        <span className="more"><a href="">more</a></span>
                    </div>
                    <div className="gallery_inner">
                        <img src={process.env.PUBLIC_URL + '/assets/img/MD1.jpg'} width="270px" alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/img/MD2.jpg'} width="270px" alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/img/MD3.jpg'} width="270px" alt="" />
                    </div>
                </div>

                <div className="right_notice">
                    <div className="no_txt">
                        <h3>NOTICE</h3>
                        <span className="more"><a href="">+ more</a></span>
                    </div>

                    <table className="type">
                        <tr>
                            <th scope="row">신제품 혼수 그룻 '콩트 시리즈'</th>
                            <td>2022-08-29</td>
                        </tr>
                        <tr>
                            <th scope="row">프리미엄 신제품 젬컷 출시</th>
                            <td>2022-08-29</td>
                        </tr>
                        <tr>
                            <th scope="row">한국도자기, 연희점 리뉴얼 개점</th>
                            <td>2022-08-29</td>
                        </tr>
                        <tr>
                            <th scope="row">여성이 뽑은 최고의 명품대상 수상</th>
                            <td>2022-08-29</td>
                        </tr>
                        <tr>
                            <th scope="row">어린이날 기념, 어린이 식기 출시</th>
                            <td>2022-08-29</td>
                        </tr>
                    </table>
                </div>

            </div>
        </section>
    )
}

export default MD