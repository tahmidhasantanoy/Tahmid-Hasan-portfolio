import React from 'react';
import Header from '../Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayOut;