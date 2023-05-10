import {CreditsPeopleCastType} from "../../Store/tmdbService/@types";

export type TablePeopleActingType = {
    movieCredits: CreditsPeopleCastType[] | undefined,
    tvCredits: CreditsPeopleCastType[] | undefined,
}

export interface MovieCredits {
    key: string;
    year: number;
    descriptions: {
        tvID?: number,
        movieID?: number,
        title?: string,
        character: string,
        name?: string,
        episode_count?: number
    }
}

export type PeoplePosterType = {
    poster: string | null | undefined
}

export type PeopleInfoType = {
    title: string | null | undefined,
    gender: number | null | undefined,
    birthday: string | null | undefined,
    deathday: string | null | undefined,
    placeOfBirth: string | null | undefined,
    knownFor: string | undefined,
    twitterLink: string | null | undefined,
    facebookLink: string | null | undefined,
}

export type PeopleBiographyType = {
    title: string,
    biography: string | null | undefined,
}