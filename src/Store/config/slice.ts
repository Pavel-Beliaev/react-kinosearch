import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ConfigurationState, VideoModal} from "./@types";
import {Genres, IConfiguration} from "../tmdbService/@types";

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
        setConfiguration(state, action:PayloadAction<IConfiguration>) {
            state.base_url = action.payload.images.base_url
            state.profileSize = action.payload.images.profile_sizes[2]
            state.backdropSize = action.payload.images.backdrop_sizes[2]
            state.posterSize = action.payload.images.poster_sizes[3]
            state.avatarSize = action.payload.images.logo_sizes[1]
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
    setConfiguration,
    setActiveModal,
    setGenreMovies,
    setGenreTV
} = configurationSLice.actions;

export default configurationSLice.reducer