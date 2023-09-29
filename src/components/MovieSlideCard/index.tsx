import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";
import notPicture from "../../assets/PNG/placeholder.png";
import {Rating} from "../UI";
import './movieSlideCard.scss'

type PropsType = {
    first_air_date?: string,
    release?: string,
    title: string,
    rating: number,
    poster: string | null
    id: number,
}
export const MovieSlideCard: FC<PropsType> = React.memo(({first_air_date, id, release, poster, title, rating}) => {
    const dispatch = useAppDispatch();
    const {base_url, posterSize} = useAppSelector(
        (state) => state.config
    );

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
            <Link
                style={{cursor: (release || first_air_date) ? 'auto' : 'pointer'}}
                onClick={(e) => (release || first_air_date) && e.preventDefault()}
                to={`/movie/${id}`}
                className={(release || first_air_date) ? 'sliderCard-poster_alt' : 'sliderCard-poster'}
            >
                {(release || first_air_date) &&
                    <div className='sliderCard-aside'>
                        <div
                            className='sliderCard-play'
                            onClick={() => dispatchActiveModalHandler(id)}
                        >
                            <i className='fa fa-play'></i>
                        </div>
                        <Link
                            className='sliderCard-readMore'
                            to={`${release ? 'movie' : 'tv'}/${id}`}
                        >
                            Read more
                        </Link>
                        <span>Released: {release}</span>
                    </div>
                }
                <img
                    src={`${base_url}${posterSize}${poster}`}
                    alt="poster"
                />
            </Link>
            <div>
                <div className='sliderCard-title'>
                    <h4>{title}</h4>
                </div>
                <div className='sliderCard-more'>
                    <Rating
                        rating={rating}
                        fill='none'
                    />
                </div>
            </div>
        </div>
    );
});