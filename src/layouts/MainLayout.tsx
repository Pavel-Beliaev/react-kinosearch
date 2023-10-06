import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import {Outlet} from "react-router-dom";
import {
    useLazyGetConfigurationQuery,
    useLazyGetGenreMoviesQuery,
    useLazyGetGenreTVQuery,
} from "../Store/tmdbService/endpoints";
import {DropDownMenu, Footer, Header, Menu} from "../modules";
import './mainLayout.scss'
import {useObserver} from "../hooks/useObserver";
import {ButtonToUp} from "../components";

export const MainLayout: FC = () => {
    const [fetchGenresMovie] = useLazyGetGenreMoviesQuery();
    const [fetchGenresTV] = useLazyGetGenreTVQuery();
    const [fetchConfig] = useLazyGetConfigurationQuery();
    const elementRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState<boolean>(false);

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
            <DropDownMenu scroll={scroll}/>
            <Header/>
            <Outlet/>
            <ButtonToUp scroll={scroll}/>
            <Footer/>
        </div>
    );
};
