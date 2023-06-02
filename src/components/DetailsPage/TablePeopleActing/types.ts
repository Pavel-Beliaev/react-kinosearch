import {CreditsPeopleCastType} from "../../../Store/tmdbService/@types";

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