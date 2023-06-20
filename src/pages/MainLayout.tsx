import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {
    useGetConfigurationQuery,
    useGetGenreMoviesQuery,
    useGetGenreTVQuery,
    useLazyGetVideoByIdQuery
} from "../Store/tmdbService/endpoints";
import {useAppSelector} from "../Store/store";
import {DropDownNavbar, Footer, Header, Menu, ModalWindow, VideoPlayer} from "../components";


const MainLayout: React.FC = () => {
    const {active, id} = useAppSelector(state => state.config.activeModal);

    const [target, data] = useLazyGetVideoByIdQuery()
    useGetConfigurationQuery();
    useGetGenreMoviesQuery();
    useGetGenreTVQuery();

    const {pathname} = useLocation();

    const [scroll, setScroll] = useState(0);

    const movieID = id && id
    const foundVideo = data.data?.results
        .find((video) =>
            video.name
                .toLowerCase()
                .includes('official trailer'))
    const video = (foundVideo || data.data?.results[0])

    useEffect(() => {
        if (active) {
            target(Number(movieID))
        }
    }, [movieID])

    useEffect(() => {
        window
            .addEventListener("scroll", handleScroll);
        return () => window
            .removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window
            .scrollTo(0, 0);
    };


    return (
        <div className='wrapper'>
            <Menu/>
            <DropDownNavbar scroll={scroll}/>
            <Header pathname={pathname}/>
            <div className='frameworks'>
                <Outlet/>
            </div>
            <div
                style={{
                    opacity: scroll < 300
                        ? 0
                        : 1
                }}
                onClick={handleUpButton}
                className='back-to-top'>
                <i className='fa fa-chevron-up'></i>
            </div>
            <Footer/>
            <ModalWindow>
                <div
                    className={active
                        ? 'modal-content active'
                        : 'modal-content'
                    }
                    onClick={event => event
                        .stopPropagation()}
                >
                    {active &&
                        <VideoPlayer keys={video?.key}/>
                    }
                </div>
            </ModalWindow>
        </div>
    );
};

export default MainLayout;