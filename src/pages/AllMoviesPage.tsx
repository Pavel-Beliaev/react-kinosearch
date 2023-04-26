import React, {useCallback, useEffect, useRef, useState} from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import MovieCard from "../components/Cards/MovieCard";
import {useAppDispatch, useAppSelector} from "../Store/store";
import {tmdbApi, useGetAllMoviesQuery} from "../Store/tmdbService/tmdb.api";
import {useObserver} from "../hooks/useObserver";
import {Link} from "react-router-dom";
import debounce from 'lodash.debounce'

const AllMoviesPage: React.FC = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [isValue, setIsValue] = useState('');
    const [genre, setGenre] = useState<number | null>(null);
    const lastElementRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector((state) => state.config);


    const {isFetching, data} = useGetAllMoviesQuery(
        {searchValue, pageNumber, genre, type: (searchValue ? 'search' : 'discover')},
        {refetchOnMountOrArgChange: true}
    );
    const moviesDataBase = data?.results ?? [];
    const totalPage = data?.total_pages ?? 1;

    useObserver(
        lastElementRef,
        isFetching,
        () => {
            if (pageNumber < totalPage) {
                setPageNumber(pageNumber + 1)
            }
        }
    )

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

    const changeGenre = (IdGenre: number) => {
        setGenre(IdGenre)
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
            </div>
            <div className='movies-colum'>
                {moviesDataBase.map((film) => (
                    <MovieCard
                        key={film.id}
                        title={film.title}
                        overview={film.overview}
                        poster={film.poster_path}
                        filmGenre={film.genre_ids}

                    />
                ))}
                <div style={{height: 1, width: '100%'}}
                     ref={lastElementRef}/>
            </div>
            <div className='movies-sidebar'>
                <h4>Categories</h4>
                <ul>
                    {genres.map((genre) => (
                        <li key={genre.id}><Link to="#" onClick={() => changeGenre(genre.id)}>{genre.name}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AllMoviesPage;