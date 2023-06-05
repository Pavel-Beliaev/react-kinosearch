import React from 'react';
import MovieCard from "./Cards/MovieCard";
import {useOutletContext} from "react-router-dom";
import {IResultsMovies} from "../Store/tmdbService/@types";

type AllMoviesContentType = {
    dataFilms: IResultsMovies[],
}

const AllMoviesContent:React.FC = () => {
    const {dataFilms} = useOutletContext<AllMoviesContentType>()

    return (
        <>
            {dataFilms.map((film) => (
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

export default AllMoviesContent;