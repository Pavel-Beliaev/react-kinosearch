import React, {FC} from 'react';
import {useOutletContext} from "react-router-dom";
import {IResultsMovies} from "../../../../Store/tmdbService/@types";
import {MovieCard} from "../../components/MovieCard";

type AllMoviesLayoutType = {
    dataFilms: IResultsMovies[],
}

export const AllMoviesLayout:FC = () => {
    const {dataFilms} = useOutletContext<AllMoviesLayoutType>()

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