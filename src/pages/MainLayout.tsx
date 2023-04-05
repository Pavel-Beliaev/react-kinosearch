import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {ReactComponent as BackToUpIcon} from "../public/SVG/chevron-up.svg";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <a href="#" className='back-to-top'>
                <BackToUpIcon/> {/*opacity: 0;*/}
            </a>
            <Footer/>
        </div>
    );
};

export default MainLayout;