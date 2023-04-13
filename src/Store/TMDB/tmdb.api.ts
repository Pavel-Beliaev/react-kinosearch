import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.themoviedb.org/3`
    }),
    endpoints: (build) => ({
        getAllMovies: build.query({
            query: (page) => ({
                url: '/discover/movie',
                params: {
                    'page': page,
                    'api_key':'d2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                }
            })
        }),
        searchMovies: build.query({
            query: (name) => ({
                url: '/search/movie',
                params: {
                    'query': name,
                    'api_key':'d2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                }
            })
        }),
        getAllGenres: build.query({
            query: (lang) => ({
                url: '/genre/movie/list',
                params: {
                    'language': lang,
                    'api_key':'d2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                }
            })
        }),
        getNewMovies: build.query({
            query: (lang) => ({
                url: '/movie/upcoming',
                params: {
                    'language': lang,
                    'api_key':'d2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                }
            })
        }),
        getPicture: build.query({
            query: (id) => ({
                url: `/collection/${id}/images`,
                params: {
                    'api_key':'d2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                }
            })
        }),
        getVideo: build.query({
            query: (id) => ({
                url: `/movie/${id}/videos`,
                params: {
                    'api_key':'d2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                }
            })
        }),
    })
})

export const {
    useGetVideoQuery,
    useGetPictureQuery,
    useGetNewMoviesQuery,
    useGetAllMoviesQuery,
    useSearchMoviesQuery,
    useGetAllGenresQuery} = tmdbApi

