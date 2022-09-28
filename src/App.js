import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import Intro from './shop/Intro';
import Notice from './shop/Noticde';
import './css/ShopDetail.scss';

import MD from './components/MD';
import Issue from './components/Issue';
import Mid from './components/Mid';
import Layer from './components/Layer';
import MainSlide from './components/MainSlide';



const App = () => {
    return (
        <>
            <Header />
            <MainSlide />

            <MD />
            <Issue />
            <Mid />

            <Layer />

            <Footer />
        </>
    )
}

export default App