import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../Store/store";
import {setActiveModal} from "../../../Store/config/slice";
import notPicture from "../../../public/PNG/placeholder.png";
import {Rating} from "../../Rating";

export type MovieSlideCardProps = {
    first_air_date?: string,
    release?: string,
    title: string,
    rating: number,
    poster: string | null
    id: number,
}

export const MovieSlideCard:FC<MovieSlideCardProps> = ({first_air_date, id, release, poster, title, rating}) => {
    const dispatch = useAppDispatch();

    const {base_url, posterSize} = useAppSelector((state) => state.config)

    return (
        <div className='movieSliderCard'>
            {release || first_air_date
                ? <div className='movieSliderCard-poster'>
                    <div className='movieSliderCard-aside'>
                        <div className='movieSliderCard-text'>
                            <div
                                className='movieSliderCard-play'
                                onClick={() =>
                                    dispatch(setActiveModal({
                                        active: true,
                                        id: id
                                    }))
                                }
                            >
                                <i className='fa fa-play'></i>
                            </div>
                            <Link
                                className='movieSliderCard-readMore'
                                to={release
                                    ? `all/movie/${id}`
                                    : `all/tv/${id}`
                                }
                            >
                                Read more
                            </Link>
                            <span>Released: {release}</span>
                        </div>
                    </div>
                    <img
                        src={poster
                            ? `${base_url}${posterSize}${poster}`
                            : notPicture
                        }
                        alt="poster"
                    />
                </div>
                : <div className='movieSliderCard-posterAlt'>
                    <Link to={`/all/movie/${id}`}>
                        <img
                            src={poster
                                ? `${base_url}${posterSize}${poster}`
                                : notPicture
                            }
                            alt="poster"
                        />
                    </Link>
                </div>
            }
            <div className='movieSliderCard-title'>
                <h4>{title}</h4>
            </div>
            <div className='movieSliderCard-more'>
                <Rating
                    rating={rating}
                    fill='none'
                />
            </div>
        </div>
    );
};