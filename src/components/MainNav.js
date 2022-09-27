import React from 'react'
import { Link } from 'react-router-dom'
import '../css/MainNav.scss'


const MainNav = () => {
    return (
        <nav class="menu">
            <ul>
                <li><a href="">COMPANY</a>
                    <ul>
                        <li><a href="">회사소개</a></li>
                        <li><a href="">회사연혁</a></li>
                        <li><a href="">계열사</a></li>
                        <li><a href="">오시는길</a></li>
                    </ul>
                </li>

                <li><a href="">PRODUCT</a>
                    <ul>
                        <li><a href="">홈/차림세트</a></li>
                        <li><a href="">예단</a></li>
                        <li><a href="">티/커피/머그</a></li>
                        <li><a href="">면기/볼</a></li>
                        <li><a href="">어린이세트</a></li>
                        <li><a href="">선물세트</a></li>
                    </ul>
                </li>

                <li><a href="">BRANDS</a>
                    <ul>
                        <li><a href="">Prouna</a></li>
                        <li><a href="">Twig NewYork</a></li>
                        <li><a href="">Whitebloom</a></li>
                        <li><a href="">Art Collaboration</a></li>
                    </ul>
                </li>

                <li><a href="">B2B / B2C</a>
                    <ul>
                        <li><a href="">CERAMIC</a></li>
                        <li><a href="">DECAL</a></li>
                    </ul>
                </li>

                <li><a href="">COMMUNITY</a>
                    <ul>
                        <li><a href="">Notice</a></li>
                        <li><a href="">Magazine</a></li>
                        <li><a href="">Media</a></li>
                    </ul>
                </li>

                <li><a href="">CUSTOMER</a>
                    <ul>
                        <li><a href="">매장안내</a></li>
                        <li><a href="">CS Center</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav