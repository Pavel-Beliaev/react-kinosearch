import {IResultsMovies} from "../tmdbService/@types";

export type MoviesState = {
    dataFilms: IResultsMovies[],
    pageNumber: number,
    infinityAble: boolean,
    searchValue: string,
    genreId: number | string,
    genresType: {
        genreId: number | string,
        type: string,
    },
}
