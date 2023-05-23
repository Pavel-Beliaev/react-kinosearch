import {
    AllPersonsType,
    IConfiguration, IDetailsMovie, IDetailsTv,
    IGenres,
    IMovies,
    INewMovies,
    IPopularPerson,
    IVideos,
    QueryArgs,
} from "./@types";
import {
    setAvatarSize,
    setBackdropSize,
    setBaseUrl,
    setGenreMovies, setGenreTV,
    setPosterSize,
    setProfileSize
} from "../config/slice";
import {setHeaderFilms, setHeaderPeoples} from "../header/slice";
import {tmdbApi} from "./tmdb.api";
import {setInfinityScroll} from "../movies/slice";
import {setErrorMessage} from "../errors/slice";

export type ErrorType = {

    status_code: number,
    status_message: string,
    success: boolean

}

const extendedApi = tmdbApi.injectEndpoints({
    endpoints: (build) => ({

        // endpoints config

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
                    dispatch(setProfileSize(data?.images.profile_sizes[2]))
                    dispatch(setBackdropSize(data?.images.backdrop_sizes[2]))
                    dispatch(setPosterSize(data?.images.poster_sizes[3]))
                    dispatch(setAvatarSize(data?.images.logo_sizes[1]))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        getGenreMovies: build.query<IGenres, void>({
            query: () => ({
                url: '/genre/movie/list',
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setGenreMovies(data.genres))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        getGenreTV: build.query<IGenres, void>({
            query: () => ({
                url: '/genre/tv/list',
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setGenreTV(data.genres))
                } catch (error) {
                    console.log(error)
                }
            }
        }),

        // endpoints search

        searchMovies: build.query<IMovies, QueryArgs>({
            query: ({type, searchValue, pageNumber}) => ({
                url: `/search/${type}`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                    query: searchValue,
                    page: pageNumber,
                },
            }),
        }),

        // endpoints getAll

        getAllMovies: build.query<IMovies, QueryArgs>({
            query: ({type, pageNumber, genre, peopleId}) => ({
                url: `/discover/${type}`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                    page: pageNumber,
                    with_genres: genre,
                    with_people: peopleId,
                },
            }),
            // keepUnusedDataFor: 1,
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                        dispatch(setInfinityScroll(data.results))
                } catch (error) {
                    console.log('error')
                }
            }
        }),
        getAllPerson: build.query<IPopularPerson, number>({
            query: (page) => ({
                url: '/person/popular',
                params: {
                    page: page,
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),


        // endpoints films

        getTrendingMovies: build.query<IMovies, string>({
            query: (time_window) => ({
                url: `/trending/movie/${time_window}`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
        getTopRatedMovies: build.query<IMovies, string>({
            query: (type) => ({
                url: `${type}/top_rated`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
        //in header
        getNewMovies: build.query<INewMovies, void>({
            query: () => ({
                url: '/movie/now_playing',
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            })
        }),
        //in slider trailers
        getPopularMovies: build.query<IMovies, number>({
            query: (page) => ({
                url: '/movie/popular',
                params: {
                    page: page,
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
        }),

        // endpoints video

        getVideoById: build.query<IVideos, number | undefined>({
            query: (id) => ({
                url: `/movie/${id}/videos`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
        }),


        // endpoints details

        getDetailsMovie: build.query<IDetailsMovie, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                    append_to_response: 'videos,credits,images,reviews,external_ids'
                },
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setHeaderFilms({
                        title: data.title,
                        genres: data.genres,
                        url: data.backdrop_path,
                        heading: ''
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        getDetailsTv: build.query<IDetailsTv, number>({
            query: (tv_id) => ({
                url: `/tv/${tv_id}`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                    append_to_response: 'videos,credits,images,reviews,external_ids'
                },
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setHeaderFilms({
                        title: data.name,
                        genres: data.genres,
                        url: data.backdrop_path,
                        heading: ''
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        getDetailsPerson: build.query<AllPersonsType, number>({
            query: (id) => ({
                url: `/person/${id}`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                    append_to_response: 'movie_credits,tv_credits,external_ids,tagged_images'
                },
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setHeaderPeoples({
                        title: data.name,
                        genres: [],
                        url: data.profile_path,
                        heading: ''
                    }))
                } catch (error) {

                }
            }
        }),
    }),
    overrideExisting: true
})
export const {
    useSearchMoviesQuery,
    useGetDetailsTvQuery,
    useGetDetailsPersonQuery,
    useGetDetailsMovieQuery,
    useGetAllMoviesQuery,
    useLazyGetAllMoviesQuery,
    useLazyGetVideoByIdQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetTrendingMoviesQuery,
    useGetGenreMoviesQuery,
    useGetGenreTVQuery,
    useGetNewMoviesQuery,
    useGetConfigurationQuery,
    useGetAllPersonQuery,
} = extendedApi