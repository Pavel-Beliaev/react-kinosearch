import {Genres, IMovies, IResultsMovies} from "../tmdbService/@types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {VideoModal} from "../config/@types";

export type MoviesState = {
    pageNumber: number,
    dataFilms: IResultsMovies[],
}

const initialState: MoviesState = {
    pageNumber: 1,
    dataFilms: [],
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setPageNumber(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload
        },
        setMovieData(state, action: PayloadAction<IResultsMovies[]>) {
            state.dataFilms = action.payload
        },
    },
})

export const {
    setPageNumber,
    setMovieData,
} = moviesSlice.actions;

export default moviesSlice.reducer