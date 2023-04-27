import React from 'react';
import {Link} from "react-router-dom";
import Rating from "../Rating/Rating";
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";

type MovieSlideCardProps = {
    release: string,
    title: string,
    rating: number,
    poster: string | null
    id: number
}


const MovieSlideCard:React.FC<MovieSlideCardProps> = ({id, release, poster, title, rating}) => {
    const dispatch = useAppDispatch();
    const {base_url, posterSize} = useAppSelector((state) => state.config)


    return (
        <div className='newfilms'>
            <div className='newfilms-poster'>
                <div className='newfilms-aside'>
                    <div className='newfilms-text'>
                        <div
                            className='newfilms-play'
                            onClick={() => dispatch(setActiveModal({active:true, id: id}))}
                        >
                            <i className='fa fa-play'></i>
                        </div>
                        <Link className='newfilms-readmore'
                              to={`/movies/${id}`}>
                            Read more
                        </Link>
                        <span>Released: {release}</span>
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
                <Rating rating={rating} fill='none'/>
            </div>
        </div>
    );
};

export default MovieSlideCard;