import {Genres} from "../tmdbService/@types";

export type ParamsPageDataType = {
    title: string,
    heading: string,
    genres: Genres[],
    url: string | null,
}

export type PageDataType = {
    [key: string]: ParamsPageDataType
};