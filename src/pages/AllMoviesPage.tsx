import React, {useCallback, useEffect, useRef, useState} from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import MovieCard from "../components/Cards/MovieCard";
import {useAppDispatch, useAppSelector} from "../Store/store";
import {useObserver} from "../hooks/useObserver";
import debounce from 'lodash.debounce'
import SkeletonMovieCard from "../components/Skeletons/SkeletonMovieCard";
import {useGetAllMoviesQuery, useSearchMoviesQuery} from "../Store/tmdbService/endpoints";
import Switcher from "../components/Switcher/Switcher";
import {typeQueryFilms} from "../mock/statick";
import CustomButton from "../components/CustomButton/CustomButton";
import {setPageNumber} from "../Store/movies/slice";

const AllMoviesPage: React.FC = () => {
    const {pageNumber, dataFilms} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    // const [pageNumber, setPageNumber] = useState(1);
    const [switcherFilms, setSwitcherFilms] = useState(0)
    const [searchValue, setSearchValue] = useState('');
    const [isValue, setIsValue] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const [isActive, setIsActive] = useState<{ idx?: number | null, active?: boolean }>({idx: null, active: false})
    const [genre, setGenre] = useState<number | null>();

    const lastElementRef = useRef<HTMLDivElement>(null);

    const {genresMovies, genresTV} = useAppSelector((state) => state.config);
    const genres = switcherFilms === 0 ? genresMovies : genresTV

    const {isFetching, data, refetch} = useGetAllMoviesQuery({
            type: typeQueryFilms[switcherFilms],
            pageNumber,
            genre
        },
    );

    const {data: searchMovieData} = useSearchMoviesQuery({
            type: typeQueryFilms[switcherFilms],
            searchValue,
            pageNumber,
        },
    );

    const searchMovieDataBase = searchMovieData?.results ?? []
    // const moviesDataBase = data?.results ?? [];
    const totalPage = data?.total_pages ?? 1;
    const dataBaseMovie = !searchValue ? dataFilms : searchMovieDataBase

    useObserver(
        lastElementRef,
        isVisible,
        () => {
            // if (pageNumber < totalPage) {
            //     dispatch(setPageNumber(pageNumber + 1))
            // }
            if (!isVisible) {
                setIsVisible(true)
            }
        },
        () => {
            setIsVisible(false)
        }
    )

    useEffect(() => {
        refetch()
        setGenre(null)
        setIsActive({idx:null, active:false})
    }, [switcherFilms])


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

    const changePage = () => {
        if (pageNumber < totalPage) {
            dispatch(setPageNumber(pageNumber + 1))
        }
    }

    console.log(isActive)
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
            <div className='movies-colum'>
                {dataBaseMovie.map((film, index) => (
                    isFetching
                        ? <div
                            key={index}
                            className='movies-skeleton'><SkeletonMovieCard/></div>
                        : <MovieCard
                            switcherFilms={switcherFilms}
                            key={film.id}
                            id={film.id}
                            title={film.title || film.name}
                            overview={film.overview}
                            poster={film.poster_path}
                            filmGenre={film.genre_ids}

                        />
                ))}
                <div
                    style={isVisible ? {opacity: 1, transition: "all 300ms ease-in-out"} : {}}
                    ref={lastElementRef}
                    className='movies-button'>
                    <CustomButton
                        children={'Load more'}
                        onClick={() => {
                            changePage()
                        }}
                    />
                </div>
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