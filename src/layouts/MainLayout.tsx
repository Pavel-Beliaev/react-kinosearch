import React, {FC, useEffect, useRef, useState} from "react";
import {Outlet} from "react-router-dom";
import {
    useLazyGetConfigurationQuery,
    useLazyGetGenreMoviesQuery,
    useLazyGetGenreTVQuery,
} from "../Store/tmdbService/endpoints";
import ButtonToUp from "../components/ButtonToUp";
import {DropDownNavbar, Footer, Header, Menu} from "../modules";
import './mainLayout.scss'
import {useObserver} from "../hooks/useObserver";

export const MainLayout: FC = React.memo(() => {
    const [fetchGenresMovie] = useLazyGetGenreMoviesQuery();
    const [fetchGenresTV] = useLazyGetGenreTVQuery();
    const [fetchConfig] = useLazyGetConfigurationQuery();
    const elementRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState(false);

    useObserver(
        elementRef,
        false,
        () => {
            setScroll(false)
        },
        () => {
            setScroll(true)
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
});
