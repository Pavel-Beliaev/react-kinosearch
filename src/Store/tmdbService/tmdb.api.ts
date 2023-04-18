import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IConfiguration, IPopularPerson} from "./@types";



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
    })
})
// /configuration
export const {
    useGetConfigurationQuery,
    useGetPopularPersonQuery,
} = tmdbApi

