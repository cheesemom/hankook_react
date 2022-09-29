import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Intro from './shop/Intro';
import Notice from './shop/Notice'
import './css/ShopDetail.scss';

import MD from './components/MD';
import Issue from './components/Issue';
import Mid from './components/Mid';
import Layer from './components/Layer';
import MainSlide from './components/MainSlide';
import CS from './components/CS';


const App = () => {
    return (
        <>
            <Header />
            <MainSlide />

            <MD />
            <Issue />
            <Mid />
            {/* <CS/> */}
            <Layer />

            <Footer />
        </>
    )
}

export default App