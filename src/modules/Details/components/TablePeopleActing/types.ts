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