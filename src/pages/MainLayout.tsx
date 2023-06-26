import React, {FC, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {
    useLazyGetConfigurationQuery,
    useLazyGetGenreMoviesQuery,
    useLazyGetGenreTVQuery,
    useLazyGetVideoByIdQuery,
} from "../Store/tmdbService/endpoints";
import {useAppSelector} from "../Store/store";
import {
    DropDownNavbar,
    Footer,
    Header,
    Menu,
    ModalWindow,
    VideoPlayer,
} from "../components";
import {useScroll} from "../hooks/useScroll";

export const MainLayout: FC = () => {
    const {active, id} = useAppSelector((state) => state.config.activeModal);

    const [fetchVideoById, data] = useLazyGetVideoByIdQuery();
    const [fetchGenresMovie] = useLazyGetGenreMoviesQuery();
    const [fetchGenresTV] = useLazyGetGenreTVQuery();
    const [fetchConfig] = useLazyGetConfigurationQuery();

    const [scroll, setScroll] = useState(0);

    const movieID = id && id;
    const foundVideo = data.data?.results.find((video) =>
        video.name.toLowerCase().includes("official trailer")
    );
    const video = foundVideo || data.data?.results[0];

    const scrollTo = useScroll()

    useEffect(() => {
        fetchGenresMovie();
        fetchGenresTV();
        fetchConfig();
    }, []);

    useEffect(() => {
        if (active) {
            fetchVideoById(movieID!);
        }
    }, [movieID]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        scrollTo(0, 0, "auto")
    };

    return (
        <div className="wrapper">
            <Menu/>
            <DropDownNavbar scroll={scroll}/>
            <Header/>
            <div className="frameworks">
                <Outlet/>
            </div>
            <div
                style={{
                    opacity: scroll < 300 ? 0 : 1,
                }}
                onClick={handleUpButton}
                className="back-to-top"
            >
                <i className="fa fa-chevron-up"></i>
            </div>
            <Footer/>
            <ModalWindow>
                <div
                    className={`modal-content ${active && "active"}`}
                    onClick={(event) => event.stopPropagation()}
                >
                    {active && <VideoPlayer keys={video?.key}/>}
                </div>
            </ModalWindow>
        </div>
    );
};
