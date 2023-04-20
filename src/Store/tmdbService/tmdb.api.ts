import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IConfiguration, IGenres, IMovies, INewMovies, IPopularPerson, IResultsMovies, IVideos} from "./@types";
import {setBackdropSize, setBaseUrl, setGenre, setPosterSize, setProfileSize} from "../config/slice";


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
                    dispatch(setPosterSize(data?.images.poster_sizes[3]))
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
        getTrendingMovies: build.query<IMovies, number>({
            query: (page) => ({
                url: '/trending/movie/day',
                params: {
                    page: page,
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
        getTopRatedMovies: build.query<IMovies, number>({
            query: (page) => ({
                url: '/movie/top_rated',
                params: {
                    page: page,
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
        getPopularMovies: build.query<IMovies, number>({
            query: (page) => ({
                url: '/movie/popular',
                params: {
                    page: page,
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
        }),
        getVideoById: build.query<IVideos, number>({
            query: (id) => ({
                url: `/movie/${id}/videos`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
        getAllMovies: build.query<IMovies, void>({
            query: () => ({
                url: `/discover/movie`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
    })
})
//language=en-US
//sort_by=popularity.desc
//page=1
export const {
    useGetAllMoviesQuery,
    useGetVideoByIdQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetTrendingMoviesQuery,
    useGetGenreQuery,
    useGetNewMoviesQuery,
    useGetConfigurationQuery,
    useGetPopularPersonQuery,
} = tmdbApi

