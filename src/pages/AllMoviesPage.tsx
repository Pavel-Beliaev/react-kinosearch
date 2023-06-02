import React, {useCallback, useEffect, useRef, useState} from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import {useAppDispatch, useAppSelector} from "../Store/store";
import {useObserver} from "../hooks/useObserver";
import debounce from 'lodash.debounce'
import {useLazyGetAllMoviesQuery} from "../Store/tmdbService/endpoints";
import {setInfinityAble, setPageNumber} from "../Store/movies/slice";
import ErrorPage from "./ErrorPage";
import Loader from "../components/Loader/Loader";
import {Outlet, useLocation} from "react-router-dom";

const AllMoviesPage: React.FC = () => {
    const {dataFilms, pageNumber, infinityAble} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const [prevPageNumber, setPrevPageNumber] = useState(1)
    const [observerAble, setObserverAble] = useState(false)

    const [searchValue, setSearchValue] = useState('');
    const [isValue, setIsValue] = useState('');

    const [isActive, setIsActive] = useState(false)
    const [genreId, setGenreId] = useState<number | null>(null);

    const [preventRedundantRequest, setPreventRedundantRequest] = useState(false)

    const lastElementRef = useRef<HTMLDivElement>(null);
    const dataElementRef = useRef<HTMLDivElement>(null);

    const {pathname} = useLocation()
    const type = pathname.split('/').pop()

    const {genresMovies, genresTV} = useAppSelector((state) => state.config);
    const genres = type === 'movie' ? genresMovies : genresTV

    const [fetching, data] = useLazyGetAllMoviesQuery()


    const totalPage = data.data?.total_pages ?? 1;
    const isFetch = data.isFetching
    const isSuces = data.isSuccess

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

    // useEffect(() => {
    //     const queryString = qs.stringify({
    //         search: searchValue,
    //         genre: genreId,
    //         page: pageNumber,
    //     })
    // }, [searchValue, genreId, pageNumber])

    useEffect(() => {
        setIsActive(false)
        setGenreId(null)
    }, [type, searchValue])

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
        dispatch(setPageNumber(1))
        dispatch(setInfinityAble(false))
    }, [type, genreId, searchValue])

    useEffect(() => {
        const blockHeight = dataElementRef.current?.getBoundingClientRect().height
        const screenHeight = window.innerHeight
        setObserverAble(Boolean(blockHeight && blockHeight > screenHeight))
        if (isSuces) {
            setPrevPageNumber(pageNumber)
        }
    }, [isSuces, dataFilms])

    useEffect(() => {
        setPreventRedundantRequest(!preventRedundantRequest)
    },[pageNumber, genreId, type, searchValue])


    useEffect(() => {
        fetching({
            type: type,
            pageNumber,
            genre: genreId,
            searchValue: searchValue,
            typeQuery: searchValue ? 'search' : 'discover',
            infinityKey: infinityAble,
        })
    }, [preventRedundantRequest])

    const debounceChangeInput = useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 1000),
        []
    )

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsValue(event.target.value);
        debounceChangeInput(event.target.value);
    }

    const changeGenre = (IdGenre: number | null, active: boolean) => {
        setGenreId(IdGenre)
        setIsActive(active)
    }

    const cleanInput = () => {
        setSearchValue('')
        setIsValue('')
    }

    const cleanGenre = () => {
        setGenreId(null)
        setIsActive(false)
    }

    return (
        <div className='frameworks-container movies'>
            <div className='movies-search'>
                <CustomInput
                    value={isValue}
                    onChange={changeInput}
                    placeholder='Type to search'
                />
                <i className='fa fa-search'></i>
                {searchValue &&
                    <span
                        onClick={cleanInput}
                    >
                        Clean
                    </span>
                }
            </div>
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
                    <div
                        ref={lastElementRef}
                    />
                }
            </div>
            <div className='movies-sidebar'>
                <h4>Categories</h4>
                <ul>
                    {genres.map((genre) => (
                        <li
                            key={genre.id}
                        >
                            <span
                                className={genreId === genre.id && isActive ? 'active' : ''}

                                onClick={() => changeGenre(genre.id, true)}
                            >
                                {genre.name}
                            </span>
                        </li>
                    ))}
                    {genreId &&
                        <span
                            className='movies-sidebar-clean'
                            onClick={cleanGenre}
                        >
                        Clean
                    </span>
                    }
                </ul>
            </div>
        </div>
    );
};

export default AllMoviesPage;