export interface IConfiguration {
    images: {
        base_url: string,
        secure_base_url: string,
        backdrop_sizes: string[],
        logo_sizes: string[],
        poster_sizes: string[],
        profile_sizes: string[],
        still_sizes: string[],
    },
    change_keys: string[]
}

export interface IKnowFor {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
    media_type: string,
    //-----------
    first_air_date: string,
    origin_country: string[]
    name: string,
    original_name: string,
}

export interface IResultsPopularPerson {
    profile_path: string,
    adult: boolean,
    id: number,
    known_for: IKnowFor[]
    name: string,
    popularity: number,
}

export interface IPopularPerson {

    page: number,
    results: IResultsPopularPerson[],
    total_results: number,
    total_pages: number,
}

export type IResultsMovies = {
    poster_path: string | null,
    popularity: number,
    id: number,
    backdrop_path: string | null,
    vote_average: number,
    overview: string,
    first_air_date: string,
    origin_country: string[],
    genre_ids: number[],
    original_language: string,
    vote_count: number,
    name: string,
    original_name: string,
    adult: boolean,
    release_date: string,
    original_title: string,
    title: string,
    video: boolean,
}

export interface INewMovies {
    page: number,
    results: IResultsMovies[],
    dates: {
        maximum: string,
        minimum: string,
    }
    total_pages: number,
    total_results: number,
}

export type Genres = {
    id: number,
    name: string,
}

export interface IGenres {
    genres: Genres[],
}

export interface IMovies {

    page: number,
    results: IResultsMovies[],
    total_results: number,
    total_pages: number,
}

export type IResultVideos = {
    id: string,
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: boolean,
    published_at: string,
    site: string,
    size: number,
    type: string,
}

export interface IVideos {
    id: number,
    results: IResultVideos[],
}

export type QueryArgs = {
    type?: string,
    searchValue?: string,
    pageNumber?: number,
    genre?: number | null,
    peopleId?: number,
}

export type ISpokenLanguages = {
    iso_639_1: string,
    name: string,
}

export type IProductionCountries = {
    iso_3166_1: string,
    name: string,
}

export type IProductionCompanies = {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string,
}

export type CreditsCastType = {
    adult: boolean,
    character: string,
    credit_id: string,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    order: number,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
}

export type CreditsCrewType = {
    adult: boolean,
    credit_id: string,
    department: string,
    gender: number,
    id: number,
    job: string,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
}

export type ImagesType = {
    aspect_ratio: number,
    file_path: string,
    height: number,
    iso_639_1: null | string,
    vote_average: number,
    vote_count: number,
    width: number,

}

export type ResultsReviewsType = {

    author: string,
    author_details: {
        avatar_path: string | null,
        name: string,
        rating: number | null,
        username: string,
    },
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string,

}

export interface IDetailsMovie {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null | Object,
    budget: number,
    genres: Genres[],
    name: string,
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: IProductionCompanies[],
    production_countries: IProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: ISpokenLanguages[],
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    videos: {
        results: IResultVideos[]
    },
    credits: {
        cast: CreditsCastType[],
        crew: CreditsCrewType[],
    },
    images: {
        backdrops: ImagesType[],
        posters: ImagesType[],
    },
    reviews: {
        page: number,
        results: ResultsReviewsType[],
        total_pages: number,
        total_results: number,
    },
    external_ids: {
        imdb_id: string | null,
        facebook_id: string | null,
        instagram_id: string | null,
        twitter_id: string | null,
        id: number,
    }
}

export type CreditsPeopleCastType = {
    adult: boolean,
    backdrop_path: string | null,
    character: string,
    credit_id: string,
    episode_count: number,
    first_air_date: string
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[]
    order: number,
    original_language: string,
    original_title: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type CreditsPeopleCrewType = {
    adult: boolean,
    backdrop_path: string | null,
    credit_id: string,
    department: string,
    episode_count: number,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    job: string,
    name: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type TaggedImagesResults = {
    aspect_ratio: number,
    file_path: string,
    height: number,
    id: string,
    iso_639_1: null | string,
    vote_average: number,
    vote_count: number,
    width: number,
    image_type: string,
    media: IKnowFor,
    media_type: string,

}

export interface AllPersonsType {
    birthday: string | null,
    known_for_department: string,
    deathday: null | string,
    id: number,
    name: string,
    also_known_as: string[],
    gender: number,
    biography: string,
    popularity: number,
    place_of_birth: string | null,
    profile_path: string | null,
    adult: boolean,
    imdb_id: string,
    homepage: null | string,
    tv_credits: {
        cast: CreditsPeopleCastType[],
        crew: CreditsPeopleCrewType[],
    },
    movie_credits: {
        cast: CreditsPeopleCastType[],
        crew: CreditsPeopleCrewType[],
    },
    external_ids: {
        imdb_id: string | null,
        facebook_id: null | string,
        freebase_mid: string | null,
        freebase_id: null | string,
        tvrage_id: number | null,
        twitter_id: null | string,
        id: number,
        instagram_id: string | null,
    },
    tagged_images: {
        page: number,
        results: TaggedImagesResults[],
        total_pages: number,
        total_results: number,
    },
}

export type CreatedByType = {
    id: number,
    credit_id: string,
    name: string,
    gender: number,
    profile_path: string | null,
}

export type NetworksType = {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string,
}

export type ProductionCompaniesType = {
    id: number,
    logo_path: null | string,
    name: string,
    origin_country: string,
}

export type ProductionCountriesType = {
    iso_3166_1: string,
    name: string,
}

export type SeasonsType = {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number,
}

export type SpokenLanguagesType = {
    english_name: string,
    iso_639_1: string,
    name: string,
}

export interface IDetailsTv {
    backdrop_path: string | null,
    created_by: CreatedByType[],
    episode_run_time: number[],
    first_air_date: string,
    genres: Genres[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: {
        air_date: string,
        episode_number: number,
        id: number,
        name: string,
        overview: string,
        production_code: string,
        season_number: number,
        still_path: string | null,
        vote_average: number,
        vote_count: number,
    }
    name: string,
    next_episode_to_air: null,
    networks: NetworksType[],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    production_companies: ProductionCompaniesType[],
    production_countries: ProductionCountriesType[],
    seasons: SeasonsType[],
    spoken_languages: SpokenLanguagesType[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number,
    videos: {
        results: IResultVideos[]
    },
    credits: {
        cast: CreditsCastType[],
        crew: CreditsCrewType[],
    },
    images: {
        backdrops: ImagesType[],
        posters: ImagesType[],
    },
    reviews: {
        page: number,
        results: ResultsReviewsType[],
        total_pages: number,
        total_results: number,
    },
    external_ids: {
        imdb_id: string | null,
        facebook_id: string | null,
        instagram_id: string | null,
        twitter_id: string | null,
        id: number,
    }
}

