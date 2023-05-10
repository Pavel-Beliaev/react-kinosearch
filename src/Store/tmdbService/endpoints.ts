import {
    AllPersonsType,
    IConfiguration, IDetailsMovie, IDetailsTv,
    IGenres,
    IMovies,
    INewMovies,
    IPopularPerson,
    IVideos,
    QueryArgs
} from "./@types";
import {setAvatarSize, setBackdropSize, setBaseUrl, setGenre, setPosterSize, setProfileSize} from "../config/slice";
import {setHeaderFilms, setHeaderPeoples} from "../header/slice";
import {tmdbApi} from "./tmdb.api";

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

        // endpoints getAll

        getAllMovies: build.query<IMovies, QueryArgs>({
            query: ({type, searchValue, pageNumber, genre, peopleId}) => ({
                url: `/${type}/movie`,
                params: {
                    'api_key': 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa',
                    query: searchValue,
                    page: pageNumber,
                    with_genres: genre,
                    with_people: peopleId,
                },
            }),
            // serializeQueryArgs: ({endpointName}) => {
            //     return endpointName
            // },
            // merge: (currentCacheData, newCacheData, otherArgs) => {
            //      currentCacheData.results.push(...newCacheData.results)
            // },
            // forceRefetch({currentArg, previousArg, endpointState,state}) {
            //     console.log('currentArg', currentArg)
            //     console.log('previousArg', previousArg)
            //     console.log('endpointState', endpointState)
            //     console.log('state', state)
            //     return currentArg === previousArg
            // },
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
                    dispatch(setHeaderFilms({title: data.name, genres: data.genres, url: data.backdrop_path, heading:''}))
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
                    dispatch(setHeaderPeoples({title: data.name, genres: [], url: data.profile_path, heading: ''}))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
    }),
    overrideExisting: false
})
export const {
    useGetDetailsTvQuery,
    useGetDetailsPersonQuery,
    useGetDetailsMovieQuery,
    useGetAllMoviesQuery,
    useLazyGetVideoByIdQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetTrendingMoviesQuery,
    useGetGenreQuery,
    useGetNewMoviesQuery,
    useGetConfigurationQuery,
    useGetAllPersonQuery,
} = extendedApi