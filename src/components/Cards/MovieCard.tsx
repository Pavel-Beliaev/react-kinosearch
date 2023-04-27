import React from 'react';
import notPicture from '../../public/PNG/placeholder.png'
import {Link} from "react-router-dom";
import {useAppSelector} from "../../Store/store";

type MovieCardProps = {
    poster: string | null,
    overview: string,
    title: string,
    filmGenre: number[],
    id: number,
}

const MovieCard: React.FC<MovieCardProps> = ({id, poster, overview, title, filmGenre}) => {
    const {base_url, posterSize} = useAppSelector((state) => state.config)
    const {genres} = useAppSelector((state) => state.config)


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