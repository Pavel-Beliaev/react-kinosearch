import React, {FC} from 'react';
import {Link, useLocation} from "react-router-dom";
import {useAppSelector} from "../../Store/store";
import {MovieCardProps} from "./types";
import notPicture from "../../public/PNG/placeholder.png";


export const MovieCard:FC<MovieCardProps> = ({id, poster, overview, title, filmGenre}) => {
    const {pathname} = useLocation()

    const {base_url, posterSize, genresMovies, genresTV} = useAppSelector((state) => state.config)

    const type = pathname
        .split('/')
        .pop()
    const genres = type === 'movie'
        ? genresMovies
        : genresTV

    return (
        <div className='film'>
            <img
                src={poster
                    ? `${base_url}${posterSize}${poster}`
                    : notPicture
                }
                alt="Prev. poster"
            />
            <div className='film-info'>
                <span>
                    {filmGenre
                        .map((id) =>
                            genres
                                .find(el => el.id === id)?.name)
                        .join(', ')
                    }
                </span>
                <h3>{title}</h3>
                <p>{overview}</p>
                <div className='film-more'>
                    <p>
                        <Link
                            className='film-button'
                            to={`${pathname}/${id}`}
                        >
                            Read more
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};