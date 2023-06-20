import React, {FC, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../Store/store";
import {useObserver} from "../hooks/useObserver";
import {useLazyGetAllMoviesQuery} from "../Store/tmdbService/endpoints";
import {setGenreId, setInfinityAble, setPageNumber, setFilter} from "../Store/movies/slice";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import qs from 'qs'
import {GenreBar, Loader, Search} from "../components";
import {ErrorPage} from "./ErrorPage";

export const AllMoviesPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {pathname} = useLocation()

    const {genresMovies, genresTV} = useAppSelector((state) => state.config);
    const {dataFilms, pageNumber, infinityAble, searchValue, genreId} = useAppSelector(state => state.movies)

    const [prevPageNumber, setPrevPageNumber] = useState(1)
    const [observerAble, setObserverAble] = useState(false)
    const [preventRedundantRequest, setPreventRedundantRequest] = useState(false)

    const [isActive, setIsActive] = useState(false)

    const lastElementRef = useRef<HTMLDivElement>(null);
    const dataElementRef = useRef<HTMLDivElement>(null);

    const [fetching, allMovieBase] = useLazyGetAllMoviesQuery()

    const type = pathname
        .split('/')
        .pop()
    const genres = type === 'movie'
        ? genresMovies
        : genresTV
    const totalPage = allMovieBase.data?.total_pages ?? 1;
    const isFetch = allMovieBase.isFetching
    const isSuces = allMovieBase.isSuccess

    useObserver(
        lastElementRef,
        isFetch,
        () => {
            if (pageNumber <= totalPage && prevPageNumber === pageNumber) {
                dispatch(setPageNumber(pageNumber + 1))
                dispatch(setInfinityAble(true))
            }
        }
    )

    useEffect(() => {
        if (window.location.search) {
            const params = qs
                .parse(window
                    .location.search
                    .substring(1))
            console.log(params)
            dispatch(setFilter({
                    searchValue: params.search as string,
                    genreId: params.genre as unknown as number | null,
                    pageNumber: params.page as unknown as number,
                })
            )
        }
    }, [])

    useEffect(() => {
        const queryString = qs
            .stringify({
                search: searchValue,
                genre: genreId,
                page: pageNumber,
            })
        navigate(`?${queryString}`)
    }, [searchValue, genreId, pageNumber])

    useEffect(() => {
        setIsActive(false)
        dispatch(setGenreId(null))
    }, [type, searchValue])

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
        dispatch(setPageNumber(1))
        dispatch(setInfinityAble(false))
    }, [type, genreId, searchValue])

    useEffect(() => {
        const blockHeight = dataElementRef.current
            ?.getBoundingClientRect().height
        const screenHeight = window.innerHeight
        setObserverAble(Boolean(blockHeight && blockHeight > screenHeight))
        if (isSuces) {
            setPrevPageNumber(pageNumber)
        }
    }, [isSuces, dataFilms])

    useEffect(() => {
        setPreventRedundantRequest(!preventRedundantRequest)
    }, [pageNumber, genreId, type, searchValue])

    useEffect(() => {
        fetching({
            type: type,
            pageNumber,
            genre: genreId,
            searchValue: searchValue,
            typeQuery: searchValue
                ? 'search'
                : 'discover',
            infinityKey: infinityAble,
        })
    }, [preventRedundantRequest])

    return (
        <div className='frameworks-container movies'>
            <Search/>
            <div
                ref={dataElementRef}
                className='movies-colum'
            >
                {searchValue && !dataFilms.length
                    ? <ErrorPage/>
                    : <Outlet context={{dataFilms, type}}/>
                }
                {isFetch
                    ? <Loader/>
                    : observerAble && pageNumber < totalPage &&
                    <div ref={lastElementRef}/>
                }
            </div>
            <GenreBar
                isActive={isActive}
                setIsActive={setIsActive}
                genres={genres}
            />
        </div>
    );
};