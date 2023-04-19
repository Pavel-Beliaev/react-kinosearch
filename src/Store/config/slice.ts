import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ConfigurationState} from "./@types";
import {Genres} from "../tmdbService/@types";



const initialState: ConfigurationState = {
    base_url: '',
    profileSize: '',
    backdropSize: '',
    posterSize: '',
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
        setPosterSize(state, action: PayloadAction<string>) {
            state.posterSize = action.payload
        },
        setGenre(state, action: PayloadAction<Genres[]>) {
            state.genres = action.payload
        },

    },
})

export const {
    setBaseUrl,
    setProfileSize,
    setBackdropSize,
    setPosterSize,
    setGenre} = configurationSLice.actions;

export default configurationSLice.reducer