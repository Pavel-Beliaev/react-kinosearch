import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IConfiguration, INewMovies, IPopularPerson} from "./@types";
import {setBackdropSize, setBaseUrl, setGenre, setProfileSize} from "../config/slice";

export type Genres = {
    id: number,
    name: string,
}

export interface IGenres {
    genres: Genres[],
}


export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.themoviedb.org/3`
    }),
    endpoints: (build) => ({
        getConfiguration: build.query<IConfiguration, void>({
            query: () => ({
                url: '/configuration',
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setBaseUrl(data?.images.base_url))
                    dispatch(setProfileSize(data?.images.profile_sizes[1]))
                    dispatch(setBackdropSize(data?.images.backdrop_sizes[2]))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        getGenre: build.query<IGenres, void>({
            query: () => ({
                url: '/genre/movie/list',
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setGenre(data.genres))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        getPopularPerson: build.query<IPopularPerson, number>({
            query: (page) => ({
                url: '/person/popular',
                params: {
                    page: page,
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
        getNewMovies: build.query<INewMovies, void>({
            query: () => ({
                url: '/movie/now_playing',
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
    })
})
// /configuration
export const {
    useGetGenreQuery,
    useGetNewMoviesQuery,
    useGetConfigurationQuery,
    useGetPopularPersonQuery,
} = tmdbApi

