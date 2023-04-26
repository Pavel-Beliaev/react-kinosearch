import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ConfigurationState, VideoModal} from "./@types";
import {Genres} from "../tmdbService/@types";



const initialState: ConfigurationState = {
    base_url: '',
    profileSize: '',
    backdropSize: '',
    posterSize: '',
    genres: [],
    activeModal: {
        active: false,
        id: 0,
    }

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
        setActiveModal(state, action: PayloadAction<VideoModal>) {
            state.activeModal = action.payload
        },
    },
})

export const {
    setActiveModal,
    setBaseUrl,
    setProfileSize,
    setBackdropSize,
    setPosterSize,
    setGenre} = configurationSLice.actions;

export default configurationSLice.reducer