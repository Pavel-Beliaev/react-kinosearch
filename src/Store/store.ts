import {configureStore} from "@reduxjs/toolkit";
import {tmdbApi} from "./tmdbService/tmdb.api";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import config from "./config/slice";
import header from "./header/slice";
import movies from "./movies/slice";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        config,
        header,
        movies,
        [tmdbApi.reducerPath]: tmdbApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector