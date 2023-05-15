import {
    CreatedByType,
    CreditsCrewType,
    IDetailsMovie,
    IDetailsTv,
    ResultsReviewsType
} from "../../Store/tmdbService/@types";

export type MovieReviewsType = {
    length: number | undefined,
    title: string | undefined,
    reviews: ResultsReviewsType[] | undefined,
}

export type MoviePosterType = {
    poster: string | null | undefined,
    rating: number | undefined,
}

export type MovieOverviewType = {
    title: string,
    overview: string | null | undefined,
    creditsCrew?: CreditsCrewType[] | undefined,
    created_by?: CreatedByType[] | undefined,
}

export type MovieMediaType = {
    dataMovie: IDetailsMovie | IDetailsTv |undefined
}

export type MovieInfoType = {
    twitterLink: string | null | undefined,
    facebookLink: string | null | undefined,
    homepage: string | null | undefined,
    status: string | null | undefined,
    releaseDate: string | null | undefined,
    budget?: number | null | undefined,
    revenue?: number | null | undefined,
    end_date?: string | null | undefined,
    number_of_seasons?: number | undefined,
    number_of_episodes?: number  | undefined,
}