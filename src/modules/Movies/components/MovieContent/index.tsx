import React, {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../Store/store";
import {useScroll} from "../../../../hooks/useScroll";
import {useLazyGetAllMoviesQuery} from "../../../../Store/tmdbService/endpoints";
import {useObserver} from "../../../../hooks/useObserver";
import {setFilter, setGenreId, setGenresType, setInfinityAble, setPageNumber} from "../../../../Store/movies/slice";
import qs from "qs";
import {Search} from "../Search";
import {Loader} from "../Loader";
import './movieContent.scss'
import {MovieCard} from "../MovieCard";
import {ErrorSearch} from "../ErrorSearch";

export const MovieContent = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const scrollTo = useScroll()
    const [preventRedundantRequest, setPreventRedundantRequest] = useState(false)
    const [prevPageNumber, setPrevPageNumber] = useState(1)
    const [observerAble, setObserverAble] = useState(false)
    const lastElementRef = useRef<HTMLDivElement>(null);
    const dataElementRef = useRef<HTMLDivElement>(null);

    const {pathname} = useLocation()
    const type = pathname.split('/').pop()

    const {dataFilms, pageNumber, infinityAble, searchValue, genresType} = useAppSelector(state => state.movies)
    const [fetching, allMovieBase] = useLazyGetAllMoviesQuery()
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
        },
        () => {
        }
    )

    useEffect(() => {
        return () => {
            dispatch(setGenresType({type: '', genreId: ''}))
        }
    }, [])

    useEffect(() => {
        if (window.location.search) {
            const params = qs
                .parse(window
                    .location.search
                    .substring(1))
            dispatch(setFilter({
                    searchValue: params.search as string,
                    genreId: params.genre as unknown as number | string,
                    pageNumber: params.page as unknown as number,
                })
            )
        }
    }, [])

    useEffect(() => {
        const queryString = qs
            .stringify({
                search: searchValue,
                genre: genresType.genreId,
                page: pageNumber,
            })
        navigate(`?${queryString}`)
    }, [searchValue, genresType.genreId, pageNumber])

    useEffect(() => {
        dispatch(setGenreId(''))
    }, [genresType.type, searchValue])

    useEffect(() => {
        scrollTo(0, 0, "auto")
        dispatch(setPageNumber(1))
        dispatch(setInfinityAble(false))
    }, [genresType, searchValue])

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
    }, [pageNumber, genresType, type, searchValue])

    useEffect(() => {
        fetching({
            type: genresType.type ? genresType.type : type,
            pageNumber,
            genre: genresType.genreId,
            searchValue: searchValue,
            typeQuery: searchValue
                ? 'search'
                : 'discover',
            infinityKey: infinityAble,
        })
    }, [preventRedundantRequest])

    return (
        <>
            <Search/>
            <div
                ref={dataElementRef}
                className='movies-colum'
            >
                {searchValue && !dataFilms.length
                    ? <ErrorSearch value={searchValue}/>
                    : dataFilms
                        .map((film, index) => (
                            <div key={film.id}>
                                <MovieCard
                                    id={film.id}
                                    title={film.title || film.name}
                                    overview={film.overview}
                                    poster={film.poster_path}
                                    filmGenre={film.genre_ids}
                                />
                                {index !== dataFilms.length-1 &&
                                    <div className='line'  />
                                }
                            </div>
                        ))
                }
            </div>
            {isFetch
                ? <Loader/>
                : observerAble && pageNumber < totalPage &&
                <div ref={lastElementRef}/>
            }
        </>
    );
};
