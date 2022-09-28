import React, { useEffect, useState } from 'react'
import MainNav from './MainNav'
import '../css/Header.scss'
import { FiShoppingCart, FiUserPlus, FiSearch } from "react-icons/fi";

import Intro from '../shop/Intro';
import Notice from '../shop/Noticde';


const Header = () => {
    const [on, setOn] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            let sct = window.scrollY;
            sct > 0 ? setOn(true) : setOn(false)
        }
        window.addEventListener('scroll', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
        }
    }, [])
    return (
        <header className={`Header ${on ? 'on' : ''}`}>
            {console.log(on)}
            <div className='gnb'>
                <h1>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + '/assets/img/Logo.png'} alt="" />
                    </a>
                </h1>
                <nav className='inner'>
                    <MainNav />
                </nav>
                <ul className="rt">
                    <li><FiUserPlus /></li>
                    <li>
                        <FiShoppingCart />
                        <span>0</span>
                    </li>
                    <li><FiSearch /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header