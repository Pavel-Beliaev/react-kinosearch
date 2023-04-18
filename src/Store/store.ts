import {configureStore} from "@reduxjs/toolkit";
import {tmdbApi} from "./tmdbService/tmdb.api";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import filter from "./filter/slice";

export const store = configureStore({
    reducer: {
        filter,
        [tmdbApi.reducerPath]: tmdbApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector