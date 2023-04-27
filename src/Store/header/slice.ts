import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PageDataType, ParamsPageDataType} from "./@types";
import {tmdbApi} from "../tmdbService/tmdb.api";

const initialState: PageDataType = {
    movies: {
        heading: 'Take a look at',
        title: 'What\'s on this week',
        url: 'url("https://trafaret-decor.ru/sites/default/files/2023-01/%D0%A4%D0%BE%D0%BD%20%D0%BA%D0%B8%D0%BD%D0%BE%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%2853%29.jpg")',
        genres: [],
    },
    people: {
        heading: 'The best',
        title: 'Popular people',
        url: 'url("https://get.wallhere.com/photo/night-guitar-movies-film-reel-light-trumpet-lighting-darkness-6411.jpg")',
        genres: [],
    },
    contact: {
        heading: 'Have any questions?',
        title: 'Please contact us',
        url: 'url("https://www.rightarminc.com/wp-content/uploads/2019/10/contact_banner.jpg")',
        genres: [],
    },
    film: {
        heading: '',
        genres: [],
        title: '',
        url: '',
    }
}

export const headerSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setHeader(state, action: PayloadAction<ParamsPageDataType>) {
            state.film = action.payload
        },
    },
})

export const {setHeader} = headerSlice.actions;

export default headerSlice.reducer