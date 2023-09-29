import React, {FC} from 'react';
import './reviews.scss'
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../../Store/store";
import {ResultsReviewsType} from "../../../../Store/tmdbService/@types";

type PropsType = {
    reviews: ResultsReviewsType[] | undefined,
}

export const Reviews: FC<PropsType> = ({reviews}) => {
    const {base_url, avatarSize} = useAppSelector((state) => state.config)

    return (
        <div className='reviews'>
            {reviews
                ?.map((review) => (
                    <div
                        key={review.id}
                        className='reviews-block'>
                        <div className='reviews-icon'>
                            {review.author_details.avatar_path
                                ? <img
                                    src={!review.author_details.avatar_path
                                        .match(/https/i)
                                        ? `${base_url}${avatarSize}${review.author_details.avatar_path}`
                                        : review.author_details.avatar_path
                                            ?.substring(1)
                                    }
                                    alt="icon"
                                />
                                : <div className='reviews-icon-alt'>
                                    {review.author
                                        .substring(0, 1)
                                        .toUpperCase()
                                    }
                                </div>
                            }
                        </div>
                        <div className='reviews-text'>
                            <div className='reviews-user'>
                                <h3>{review.author}</h3>
                                <span>
                                    {review.created_at
                                        .match(/\d{4}.\d{2}.\d{2}/)
                                    }
                                </span>
                            </div>
                            <div className='reviews-text'>
                                <p>{review.content}</p>
                            </div>
                            <div className='reviews-link'>
                                <Link to={review.url}>Link to review site TMDB</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};