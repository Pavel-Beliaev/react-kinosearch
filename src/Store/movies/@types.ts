import {IResultsMovies} from "../tmdbService/@types";

export type MoviesState = {
    dataFilms: IResultsMovies[],
    types: string[],
    pageNumber: number,
    infinityAble: boolean,
    searchValue: string,
    genreId: number | null
}
