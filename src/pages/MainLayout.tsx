import React, {FC, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {
    useLazyGetConfigurationQuery,
    useLazyGetGenreMoviesQuery,
    useLazyGetGenreTVQuery,
} from "../Store/tmdbService/endpoints";
import ButtonToUp from "../components/ButtonToUp";
import {DropDownNavbar, Footer, Header, Menu} from "../modules";
import {useScrollToggle} from "../hooks/useScrollToggle";

export const MainLayout: FC = () => {
    const {scroll} = useScrollToggle();

    const [fetchGenresMovie] = useLazyGetGenreMoviesQuery();
    const [fetchGenresTV] = useLazyGetGenreTVQuery();
    const [fetchConfig] = useLazyGetConfigurationQuery();

    useEffect(() => {
        fetchGenresMovie();
        fetchGenresTV();
        fetchConfig();
    }, []);

    return (
        <div className="wrapper">
            <Menu/>
            <DropDownNavbar scroll={scroll}/>
            <Header/>
            <Outlet/>
            <ButtonToUp scroll={scroll}/>
            <Footer/>
        </div>
    );
};
