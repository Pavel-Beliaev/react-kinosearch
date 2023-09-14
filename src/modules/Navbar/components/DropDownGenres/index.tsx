import React, {FC} from 'react';
import {Genres} from "../../../../Store/tmdbService/@types";
import {useAppDispatch} from "../../../../Store/store";
import {setGenreId, setGenresType} from "../../../../Store/movies/slice";

type PropsType = {
    genres: Genres[],
    type: string
}
export const DropDownGenres: FC<PropsType> = ({genres, type}) => {
    const dispatch = useAppDispatch()
    const changeGenre = (IdGenre: number | null, type: string) => {
        dispatch(setGenreId(IdGenre))
        dispatch(setGenresType({genreId: IdGenre, type: type}))

    }

    return (
        <ul
            className='dropdown'
        >
            {genres.map((genre) => (
                <li key={genre.id}>
                    <span
                        onClick={() => changeGenre(genre.id, type)}
                    >
                        {genre.name}
                    </span>
                </li>
            ))}
        </ul>
    );
};

