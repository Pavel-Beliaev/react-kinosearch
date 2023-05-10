import React, {RefObject, useEffect, useRef, useState} from 'react';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";
import ModalVideo from "../components/ModalVideo";
import DropDownNavbar from "../components/DropDownNavbar";
import {useGetConfigurationQuery, useGetGenreQuery} from "../Store/tmdbService/endpoints";


const MainLayout: React.FC = () => {
    useGetConfigurationQuery();
    useGetGenreQuery();

    const {pathname} = useLocation();
    const navbarRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const observer = useRef<IntersectionObserver>();
    const [isVisible, setIsVisible] = useState(false)


    const BackToTop = (ref: RefObject<HTMLDivElement>) => {
        ref.current!.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    useEffect(() => {
        if (isVisible) return;
        if (observer.current) observer.current.disconnect();

        const options = {
            threshold: 0,
        };

        const addPage: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(false)
            } else if (!entries[0].isIntersecting) {
                setIsVisible(true)
            }
        };
        observer.current = new IntersectionObserver(addPage, options);
        observer.current.observe(navbarRef.current!);
    }, [isVisible])


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