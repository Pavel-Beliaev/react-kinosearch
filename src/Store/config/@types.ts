import {Genres} from "../tmdbService/@types";

export interface ConfigurationState {
    base_url: string,
    profileSize: string,
    backdropSize:string,
    posterSize:string,
    genres: Genres[],
}