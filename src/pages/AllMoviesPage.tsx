import React, {useCallback, useEffect, useRef, useState} from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import MovieCard from "../components/Cards/MovieCard";
import {useAppDispatch, useAppSelector} from "../Store/store";
import {useObserver} from "../hooks/useObserver";
import debounce from 'lodash.debounce'
import SkeletonMovieCard from "../components/Skeletons/SkeletonMovieCard";
import {useGetAllMoviesQuery, useLazyGetAllMoviesQuery} from "../Store/tmdbService/endpoints";
import Switcher from "../components/Switcher/Switcher";
import {typeQueryFilms} from "../mock/statick";
import {setMovieData, setPageNumber} from "../Store/movies/slice";

const AllMoviesPage: React.FC = () => {
    const {dataFilms, pageNumber, types} = useAppSelector(state => state.movies)
    const [switcherFilms, setSwitcherFilms] = useState(0)
    const dispatch = useAppDispatch();
    const [prevPageNumber, setPrevPageNumber] = useState(1)


    const [searchValue, setSearchValue] = useState('');
    const [isValue, setIsValue] = useState('');

    // const [isLoading, setIsLoading] = useState(false)

    const [isActive, setIsActive] = useState<{ idx?: number | null, active?: boolean }>({idx: null, active: false})
    const [genre, setGenre] = useState<number | null>();

    const lastElementRef = useRef<HTMLDivElement>(null);
    const dataElementRef = useRef<HTMLDivElement>(null);

    const {genresMovies, genresTV} = useAppSelector((state) => state.config);
    const genres = switcherFilms === 0 ? genresMovies : genresTV


    const [fetching, data] = useLazyGetAllMoviesQuery()

    const blockHeight = dataElementRef.current?.getBoundingClientRect().height
    const pageHeight = blockHeight! > window.innerHeight
    const totalPage = data.data?.total_pages ?? 1;
    const isFetch = data.isFetching
    const isSuces = data.isSuccess

    useObserver(
        lastElementRef,
        isFetch,
        () => {
            if (pageNumber <= totalPage && prevPageNumber === pageNumber) {
                dispatch(setPageNumber(pageNumber + 1))
            }
        }
    )

    useEffect(() => {
        if (isSuces) {
            setPrevPageNumber(pageNumber)
        }
    },[isSuces, dataFilms])



    useEffect(() => {
        fetching({
            type: types[switcherFilms],
            pageNumber,
        })
    }, [pageNumber, switcherFilms])

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
    const changeGenre = (IdGenre: number | null, idx: number, active: boolean) => {
        setGenre(IdGenre)
        setIsActive({idx, active: active})
    }

    console.log(pageNumber)

    return (
        <div className='frameworks-container movies'>
            <div className='movies-search'>
                <CustomInput
                    value={isValue}
                    onChange={changeInput}
                    placeholder='Type to search'
                />
                <i className='fa fa-search'></i>
            </div>
            <div className='movies-switcher'>
                <Switcher
                    switcher={switcherFilms}
                    setSwitcher={setSwitcherFilms}
                    title1={'Movies'}
                    title2={'TV'}
                    color={'#ffffff'}
                />
            </div>
            <div
                ref={dataElementRef}
                className='movies-colum'
            >
                {dataFilms.map((film, index) => (
                    data.isFetching
                        ? <div
                            key={index}
                            className='movies-skeleton'><SkeletonMovieCard/></div>
                        : <MovieCard
                            index={index}
                            switcherFilms={switcherFilms}
                            key={film.id}
                            id={film.id}
                            title={film.title || film.name}
                            overview={film.overview}
                            poster={film.poster_path}
                            filmGenre={film.genre_ids}

                        />
                ))}
                {pageHeight &&
                    <div ref={lastElementRef}/>
                }
            </div>
            <div className='movies-sidebar'>
                <h4>Categories</h4>
                <ul>
                    {genres.map((genre, index) => (
                        <li
                            className={isActive.idx === index && isActive.active ? 'active' : ''}
                            key={genre.id}
                        >
                            <span
                                onClick={() => changeGenre(genre.id, index, true)}
                            >
                                {genre.name}
                            </span>
                            {isActive.idx === index && isActive.active &&
                                <i
                                    onClick={() => changeGenre(null, index, false)}
                                    className='fa fa-times'
                                >
                                </i>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AllMoviesPage;