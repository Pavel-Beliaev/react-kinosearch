import {IResultsMovies} from "../tmdbService/@types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type MoviesState = {
    dataFilms: IResultsMovies[],
    types: string[],
    pageNumber: number,
}

const initialState: MoviesState = {
    dataFilms: [],
    types: ['movie', 'tv'],
    pageNumber: 1
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovieData(state, action: PayloadAction<IResultsMovies[]>) {
            state.dataFilms = action.payload
        },
        setInfinityScroll(state, action: PayloadAction<IResultsMovies[]>) {
            state.dataFilms.push(...action.payload);
        },
        setPageNumber(state, action: PayloadAction<number>) {
           state.pageNumber = action.payload
        },
    },
})

export const {
    setPageNumber,
    setMovieData,
    setInfinityScroll,
} = moviesSlice.actions;

export default moviesSlice.reducer