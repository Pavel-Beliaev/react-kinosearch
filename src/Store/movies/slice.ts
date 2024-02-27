import {IResultsMovies} from "../tmdbService/@types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MoviesState} from "./@types";

type FilterType = {
    pageNumber: number,
    searchValue: string,
    genreId: number | string
};

type GenresType = {
    genreId: number | string,
    type: string
}

const initialState: MoviesState = {
    dataFilms: [],
    pageNumber: 1,
    infinityAble: false,
    searchValue: '',
    genreId: '',
    genresType: {
        genreId: '',
        type: ''
    }
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
        setGenreId(state, action: PayloadAction<number | string>) {
            state.genreId = action.payload
        },
        setGenresType(state, action: PayloadAction<GenresType>) {
            state.genresType = action.payload
        },
        setFilter(state, action: PayloadAction<FilterType>) {
            state.pageNumber = action.payload.pageNumber
            state.searchValue = action.payload.searchValue
            state.genreId = action.payload.genreId
        }
    },
})
export const {
    setGenresType,
    setFilter,
    setGenreId,
    setSearchValue,
    setPageNumber,
    setInfinityAble,
    setMovieData,
    setInfinityScroll,
} = moviesSlice.actions;

export default moviesSlice.reducer
