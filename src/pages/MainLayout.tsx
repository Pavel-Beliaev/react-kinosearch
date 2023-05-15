import React, {RefObject, useEffect, useRef, useState} from 'react';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";
import ModalVideo from "../components/ModalVideo";
import DropDownNavbar from "../components/DropDownNavbar";
import {useGetConfigurationQuery, useGetGenreMoviesQuery, useGetGenreTVQuery} from "../Store/tmdbService/endpoints";
import {useObserver} from "../hooks/useObserver";


const MainLayout: React.FC = () => {
    useGetConfigurationQuery();
    useGetGenreMoviesQuery();
    useGetGenreTVQuery();

    const {pathname} = useLocation();
    const navbarRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const observer = useRef<IntersectionObserver>();
    const [isVisible, setIsVisible] = useState(false)


    const BackToTop = (ref: RefObject<HTMLDivElement>) => {
        ref.current!.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    useObserver(
        navbarRef,
        isVisible,
        () => {
            setIsVisible(false)
        },
        () => {
            setIsVisible(true)
        }
    )


    return (
        <div
            className='wrapper'>
            <div ref={homeRef}/>
            <Menu navbarRef={navbarRef}/>
            <DropDownNavbar isVisible={isVisible}/>
            <Header pathname={pathname}/>
            <div className='frameworks'>
                <Outlet/>
            </div>
            <div
                style={{opacity: isVisible ? 1 : 0}}
                onClick={() => BackToTop(homeRef)}
                className='back-to-top show'>
                <i className='fa fa-chevron-up'></i>
            </div>
            <Footer/>
            <ModalVideo/>
        </div>
    );
};

export default MainLayout;