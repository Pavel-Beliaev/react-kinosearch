import React from 'react';
import {Link} from "react-router-dom";
import Rating from "../Rating/Rating";
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";
import {MovieSlideCardProps} from "./types";
import notPicture from "../../public/PNG/placeholder.png";



const MovieSlideCard: React.FC<MovieSlideCardProps> = ({first_air_date, id, release, poster, title, rating}) => {
    const dispatch = useAppDispatch();
    const {base_url, posterSize} = useAppSelector((state) => state.config)


    return (
        <div className='newfilms'>
            {release || first_air_date
                ? <div className='newfilms-poster'>
                    <div className='newfilms-aside'>
                        <div className='newfilms-text'>
                            <div
                                className='newfilms-play'
                                onClick={() => dispatch(setActiveModal({active: true, id: id}))}
                            >
                                <i className='fa fa-play'></i>
                            </div>
                            <Link className='newfilms-readmore'
                                  to={release ? `/movies/${id}` : `/tv/${id}`}
                            >
                                Read more
                            </Link>
                            <span>Released: {release}</span>
                        </div>
                    </div>
                    <img
                        src={poster ? `${base_url}${posterSize}${poster}` : notPicture}
                        alt="poster"
                    />
                </div>
                : <div className='newfilms-posterAlt'>
                    <Link to={`/movies/${id}`}>
                        <img
                            src={poster ? `${base_url}${posterSize}${poster}` : notPicture}
                            alt="poster"
                        />
                    </Link>
                </div>
            }
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