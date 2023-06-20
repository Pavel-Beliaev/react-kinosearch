import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../Store/store";
import {setGenreId} from "../Store/movies/slice";
import {Genres} from "../Store/tmdbService/@types";

type GenreBarType = {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
    genres: Genres[]
}

export const GenreBar:FC<GenreBarType> = ({isActive, setIsActive, genres}) => {
    const dispatch = useAppDispatch()
    const {searchValue, genreId} = useAppSelector(state => state.movies)

    const changeGenre = (IdGenre: number | null, active: boolean) => {
        dispatch(setGenreId(IdGenre))
        setIsActive(active)
    }

    const cleanGenre = () => {
        dispatch(setGenreId(null))
        setIsActive(false)
    }

    return (
        <div className='genreBar'>
            <h4>Categories</h4>
            <ul>
                {genres
                    .map((genre) => (
                        <li key={genre.id}>
                            <span
                                className={searchValue
                                    ? 'disableGenre'
                                    : genreId === genre.id && isActive
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => changeGenre(genre.id, true)}
                            >
                                {genre.name}
                            </span>
                        </li>
                    ))}
                {genreId &&
                    <span
                        className='genreBar-clean'
                        onClick={cleanGenre}
                    >
                        Clean
                    </span>
                }
            </ul>
        </div>
    );
};