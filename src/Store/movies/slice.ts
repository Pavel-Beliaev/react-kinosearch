import {IResultsMovies} from "../tmdbService/@types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useState} from "react";

export type MoviesState = {
    dataFilms: IResultsMovies[],
    types: string[],
    pageNumber: number,
    infinityAble: boolean
}

const initialState: MoviesState = {
    dataFilms: [],
    types: ['movie', 'tv'],
    pageNumber: 1,
    infinityAble: false,

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
        setInfinityAble(state, action: PayloadAction<boolean>) {
            state.infinityAble = action.payload
        },
    },
})

export const {
    setPageNumber,
    setInfinityAble,
    setMovieData,
    setInfinityScroll,
} = moviesSlice.actions;

export default moviesSlice.reducer