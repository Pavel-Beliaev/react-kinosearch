import {Genres} from "../tmdbService/@types";

export type VideoModal = {
    active: boolean,
    id?: number
}
export interface ConfigurationState {
    base_url: string,
    profileSize: string,
    backdropSize:string,
    posterSize:string,
    genresMovies: Genres[],
    genresTV: Genres[],
    activeModal: VideoModal,
    avatarSize: string,
}
