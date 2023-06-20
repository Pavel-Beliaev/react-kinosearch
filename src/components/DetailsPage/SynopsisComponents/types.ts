import {CreatedByType, CreditsCrewType, IDetails} from "../../../Store/tmdbService/@types";

export type InfoType = {
    data: IDetails | undefined,
    keyType: boolean
}

export type OverviewsType = {
    title: string,
    overview: string | null | undefined,
    creditsCrew?: CreditsCrewType[] | undefined,
    created_by?: CreatedByType[] | undefined,
    keyType: boolean
}

export type PosterType = {
    poster: string | null | undefined,
    rating: number | undefined,
    keyType: boolean
}