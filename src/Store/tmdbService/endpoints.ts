import {
    DetailsArgType,
    IConfiguration, IDetails,
    IGenres,
    IMovies,
    INewMovies,
    IPopularPerson,
    IVideos,
    QueryArgs,
} from "./@types";
import {
    setConfiguration,
    setGenreMovies,
    setGenreTV,
} from "../config/slice";
import {setHeaderFilms} from "../header/slice";
import {tmdbApi} from "./tmdb.api";
import {setInfinityScroll, setMovieData} from "../movies/slice";

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
                    dispatch(setConfiguration(data))
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

        // endpoints getAll

        getAllMovies: build.query<IMovies, QueryArgs>({
            query: ({type, typeQuery, searchValue, pageNumber, genre, peopleId, infinityKey}) => ({
                url: `/${typeQuery}/${type}`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                    page: pageNumber,
                    with_genres: genre,
                    with_people: peopleId,
                    query: searchValue,
                },
            }),
            keepUnusedDataFor: 1,
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    if (args.infinityKey) {
                        dispatch(setInfinityScroll(data.results))
                    } else dispatch(setMovieData(data.results))
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
        getPopularMovies: build.query<IMovies, null>({
            query: () => ({
                url: '/movie/popular',
                params: {
                    page: 1,
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
        }),

        // endpoints video

        getVideoById: build.query<IVideos, number>({
            query: (id) => ({
                url: `/movie/${id}/videos`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                },
            }),
        }),

        // endpoints details

        getDetails: build.query<IDetails, DetailsArgType>({
            query: ({id, type}) => ({
                url: `/${type}/${id}`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                    append_to_response: 'videos,credits,images,reviews,external_ids,movie_credits,tv_credits,tagged_images'
                },
            }),
            keepUnusedDataFor: 0,
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setHeaderFilms({
                        title: data.title
                            ? data.title
                            : data.name,
                        genres: data.genres
                            ? data.genres
                            : [],
                        url: data.backdrop_path
                            ? data.backdrop_path
                            : data.profile_path,
                        heading: ''
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
    }),
    overrideExisting: true
})
export const {
    useLazyGetDetailsQuery,
    useGetAllMoviesQuery,
    useLazyGetAllMoviesQuery,
    useLazyGetVideoByIdQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetTrendingMoviesQuery,
    useGetNewMoviesQuery,
    useLazyGetGenreMoviesQuery,
    useLazyGetGenreTVQuery,
    useLazyGetConfigurationQuery,
    useGetAllPersonQuery,
} = extendedApi