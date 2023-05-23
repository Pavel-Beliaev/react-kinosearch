import React, {useEffect, useState} from 'react';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";
import ModalVideo from "../components/ModalVideo";
import DropDownNavbar from "../components/DropDownNavbar";
import {useGetConfigurationQuery, useGetGenreMoviesQuery, useGetGenreTVQuery} from "../Store/tmdbService/endpoints";
import {useAppSelector} from "../Store/store";
import ErrorPage from "./ErrorPage";


const MainLayout: React.FC = () => {
    useGetConfigurationQuery();
    useGetGenreMoviesQuery();
    useGetGenreTVQuery();

    const {pathname} = useLocation();

    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className='wrapper'>
            <div/>
            <Menu/>
            <DropDownNavbar scroll={scroll}/>
            <Header pathname={pathname}/>
            <div className='frameworks'>
                <Outlet/>
            </div>
            <div
                style={{opacity: scroll < 300 ? 0 : 1}}
                onClick={handleUpButton}
                className='back-to-top'>
                <i className='fa fa-chevron-up'></i>
            </div>
            <Footer/>
            <ModalVideo/>
        </div>
    );
};

export default MainLayout;