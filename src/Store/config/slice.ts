import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ConfigurationState, VideoModal} from "./@types";
import {Genres} from "../tmdbService/@types";



const initialState: ConfigurationState = {
    base_url: '',
    profileSize: '',
    backdropSize: '',
    posterSize: '',
    avatarSize: '',
    genresMovies: [],
    genresTV: [],
    activeModal: {
        active: false,
        id: null,
    },


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
        setAvatarSize(state, action: PayloadAction<string>) {
            state.avatarSize = action.payload
        },
        setGenreMovies(state, action: PayloadAction<Genres[]>) {
            state.genresMovies = action.payload
        },
        setGenreTV(state, action: PayloadAction<Genres[]>) {
            state.genresTV = action.payload
        },
        setActiveModal(state, action: PayloadAction<VideoModal>) {
            state.activeModal = action.payload
        },
    },
})

export const {
    setAvatarSize,
    setActiveModal,
    setBaseUrl,
    setProfileSize,
    setBackdropSize,
    setPosterSize,
    setGenreMovies,
    setGenreTV} = configurationSLice.actions;

export default configurationSLice.reducer