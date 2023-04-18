import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Genres} from "../tmdbService/tmdb.api";

export interface ConfigurationState {
    base_url: string,
    profileSize: string,
    backdropSize:string,
    genres: Genres[],
}

const initialState: ConfigurationState = {
    base_url: '',
    profileSize: '',
    backdropSize: '',
    genres: [],
}
export const configurationSLice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setBaseUrl(state, action: PayloadAction<string>) {
            state.base_url = action.payload
        },
        setProfileSize(state, action: PayloadAction<string>) {
            state.profileSize = action.payload
        },
        setBackdropSize(state, action: PayloadAction<string>) {
            state.backdropSize = action.payload
        },
        setGenre(state, action: PayloadAction<Genres[]>) {
            state.genres = action.payload
        },
    },
})

export const {setBaseUrl, setProfileSize, setBackdropSize, setGenre} = configurationSLice.actions;

export default configurationSLice.reducer