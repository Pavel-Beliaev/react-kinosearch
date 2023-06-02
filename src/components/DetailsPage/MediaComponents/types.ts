import {
    IDetails,
    ResultsReviewsType
} from "../../../Store/tmdbService/@types";

export type MovieReviewsType = {
    length: number | undefined,
    title: string | undefined,
    reviews: ResultsReviewsType[] | undefined,
}

export type MovieMediaType = {
    dataMovie: IDetails | undefined,
    pict: string | null | undefined
}