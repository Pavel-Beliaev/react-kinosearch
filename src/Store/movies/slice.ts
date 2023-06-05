import {IResultsMovies} from "../tmdbService/@types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MoviesState} from "./@types";

const initialState: MoviesState = {
    dataFilms: [],
    pageNumber: 1,
    types: ['movie', 'tv'],
    infinityAble: false,
    searchValue: '',
    genreId: null
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
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setGenreId(state, action: PayloadAction<number | null>) {
            state.genreId = action.payload
        },
    },
})
export const {
    setGenreId,
    setSearchValue,
    setPageNumber,
    setInfinityAble,
    setMovieData,
    setInfinityScroll,
} = moviesSlice.actions;

export default moviesSlice.reducer