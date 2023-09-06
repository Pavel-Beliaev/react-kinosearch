import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import {Outlet} from "react-router-dom";
import {
    useLazyGetConfigurationQuery,
    useLazyGetGenreMoviesQuery,
    useLazyGetGenreTVQuery,
} from "../Store/tmdbService/endpoints";
import {DropDownNavbar, Footer, Header, Menu} from "../modules";
import './mainLayout.scss'
import {useObserver} from "../hooks/useObserver";
import {ButtonToUp} from "../components";

export const MainLayout: FC = () => {
    const [fetchGenresMovie] = useLazyGetGenreMoviesQuery();
    const [fetchGenresTV] = useLazyGetGenreTVQuery();
    const [fetchConfig] = useLazyGetConfigurationQuery();
    const elementRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState<boolean>(false);
    const toggleScroll = (b: boolean): void => {
        setScroll(b)
    }

    useObserver(
        elementRef,
        false,
        () => {
            toggleScroll(false)
        },
        () => {
            toggleScroll(true)
        }
    )

    useEffect(() => {
        fetchGenresMovie();
        fetchGenresTV();
        fetchConfig();
    }, []);

    return (
        <div className="wrapper">
            <Menu refElem={elementRef}/>
            <DropDownNavbar scroll={scroll}/>
            <Header/>
            <Outlet/>
            <ButtonToUp scroll={scroll}/>
            <Footer/>
        </div>
    );
};
