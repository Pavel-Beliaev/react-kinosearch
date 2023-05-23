import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../Store/store";
import {MovieCardProps} from "./types";
import notPicture from "../../public/PNG/placeholder.png";



const MovieCard: React.FC<MovieCardProps> = ({index, switcherFilms, id, poster, overview, title, filmGenre}) => {
    const {base_url, posterSize} = useAppSelector((state) => state.config)
    const {genresMovies, genresTV} = useAppSelector((state) => state.config)
    const genres = switcherFilms === 0 ? genresMovies : genresTV

    return (
        <div className='film'>
            <img
                src={poster ? `${base_url}${posterSize}${poster}` : notPicture}
                alt="Prev. poster"/>
            <div className='film-info'>
                <span>{filmGenre.map((id) =>
                    genres.find(el => el.id === id)?.name
                ).join(', ')}</span>
                <h3>{title}</h3>
                <p>{overview}</p>
                <div className='film-more'>
                    <p>
                        <Link className='film-button'
                              to={`${id}`}>
                            Read more
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;