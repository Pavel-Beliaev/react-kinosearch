import React from 'react';
import {useOutletContext} from "react-router-dom";
import {IResultsMovies} from "../Store/tmdbService/@types";
import {MovieCard} from "./Cards/MovieCard";

type AllMoviesContentType = {
    dataFilms: IResultsMovies[],
}

export const AllMoviesContent: React.FC = () => {
    const {dataFilms} = useOutletContext<AllMoviesContentType>()

    return (
        <>
            {dataFilms
                .map((film) => (
                    <MovieCard
                        key={film.id}
                        id={film.id}
                        title={film.title || film.name}
                        overview={film.overview}
                        poster={film.poster_path}
                        filmGenre={film.genre_ids}
                    />
                ))
            }
        </>
    );
};