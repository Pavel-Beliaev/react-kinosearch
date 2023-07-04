import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";
import notPicture from "../../public/PNG/placeholder.png";
import {Rating} from "../UI";

export type MovieSlideCardProps = {
    first_air_date?: string,
    release?: string,
    title: string,
    rating: number,
    poster: string | null
    id: number,
}

export const MovieSlideCard: FC<MovieSlideCardProps> = ({first_air_date, id, release, poster, title, rating}) => {
    const dispatch = useAppDispatch();

    const {base_url, posterSize} = useAppSelector((state) => state.config)

    const dispatchActiveModalHandler = (id: number) => {
        dispatch(
            setActiveModal({
                active: true,
                id: id,
            })
        );
    };

    return (
        <div className='movieSliderCard'>
            <div className={(release || first_air_date) ? 'movieSliderCard-poster_alt' : 'movieSliderCard-poster'}>
                <div className='movieSliderCard-aside'>
                    {(release || first_air_date) &&
                        <div className='movieSliderCard-text'>
                            <div
                                className='movieSliderCard-play'
                                onClick={() => dispatchActiveModalHandler(id)}
                            >
                                <i className='fa fa-play'></i>
                            </div>
                            <Link
                                className='movieSliderCard-readMore'
                                to={`all/${release ? 'movie' : 'tv'}/${id}`}
                            >
                                Read more
                            </Link>
                            <span>Released: {release}</span>
                        </div>
                    }
                </div>
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