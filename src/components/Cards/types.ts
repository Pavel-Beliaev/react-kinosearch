import {IKnowFor} from "../../Store/tmdbService/@types";

export type PeopleCardProps = {
    name: string,
    knownFor?: IKnowFor[],
    character?: string,
    profilePath: string,
    id: number
}

export type MovieSlideCardProps = {
    first_air_date?: string,
    release?: string,
    title: string,
    rating: number,
    poster: string | null
    id: number,
}

export type MovieCardProps = {
    switcherFilms: number,
    poster: string | null,
    overview: string,
    title: string,
    filmGenre: number[],
    id: number,
    index: number,
}