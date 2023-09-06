import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";
import notPicture from "../../assets/PNG/placeholder.png";
import {Rating} from "../UI";
import './movieSlideCard.scss'
import {IResultsMovies} from "../../Store/tmdbService/@types";

type PropsType = {
    data: IResultsMovies
}
export const MovieSlideCard: FC<PropsType> = ({data}) => {
    const dispatch = useAppDispatch();
    const {base_url, posterSize} = useAppSelector(
        (state) => state.config
    );
    const {first_air_date, id, release_date, poster_path, title, vote_average} = data;

    const dispatchActiveModalHandler = (id: number): void => {
        dispatch(
            setActiveModal({
                active: true,
                id: id,
            })
        );
    };

    return (
        <div className='sliderCard'>
            <div className={(release_date || first_air_date) ? 'sliderCard-poster_alt' : 'sliderCard-poster'}>
                <div className='sliderCard-aside'>
                    {(release_date || first_air_date) &&
                        <div className='sliderCard-text'>
                            <div
                                className='sliderCard-play'
                                onClick={() => dispatchActiveModalHandler(id)}
                            >
                                <i className='fa fa-play'></i>
                            </div>
                            <Link
                                className='sliderCard-readMore'
                                to={`all/${release_date ? 'movie' : 'tv'}/${id}`}
                            >
                                Read more
                            </Link>
                            <span>Released: {release_date}</span>
                        </div>
                    }
                </div>
                <Link to={`/all/movie/${id}`}>
                    <img
                        src={poster_path
                            ? `${base_url}${posterSize}${poster_path}`
                            : notPicture
                        }
                        alt="poster"
                    />
                </Link>
            </div>
            <div className='sliderCard-title'>
                <h4>{title}</h4>
            </div>
            <div className='sliderCard-more'>
                <Rating
                    rating={vote_average}
                    fill='none'
                />
            </div>
        </div>
    );
};