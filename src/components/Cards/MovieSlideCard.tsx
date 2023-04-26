import React from 'react';
import notPicture from '../../public/PNG/placeholder.png'
import {Link} from "react-router-dom";
import Rating from "../Rating/Rating";
import {useAppSelector} from "../../Store/store";

type MovieSlideCardProps = {
    date: string,
    title: string,
    rating: number,
    poster: string | null
}


const MovieSlideCard:React.FC<MovieSlideCardProps> = ({date, poster, title, rating}) => {
    const {base_url, posterSize} = useAppSelector((state) => state.config)


    return (
        <div className='newfilms'>
            <div className='newfilms-poster'>
                <div className='newfilms-aside'>
                    <div className='newfilms-text'>
                        <Link className='newfilms-play'
                              to='#'>
                            <i className='fa fa-play'></i>
                        </Link>
                        <Link className='newfilms-readmore'
                              to='/movies/1'>
                            Read more
                        </Link>
                        <span>Released: {date}</span>
                    </div>
                </div>
                <img
                    src={poster ? `${base_url}${posterSize}${poster}` : ''}
                     alt="poster"/>
            </div>
            <div className='newfilms-title'>
                <h4>{title}</h4>
            </div>
            <div className='newfilms-more'>
                <Rating rating={rating}/>
            </div>
        </div>
    );
};

export default MovieSlideCard;