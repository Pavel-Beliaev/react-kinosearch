import React, {FC} from 'react';
import './reviews.scss'
import {ResultsReviewsType} from "../../../../Store/tmdbService/@types";
import {Reviews} from "../Reviews";
import {Title} from "../../../../components";

type PropsType = {
    length: number | undefined,
    title: string | undefined,
    reviews: ResultsReviewsType[] | undefined,
}

export const MovieReviews:FC<PropsType> = ({length, title, reviews}) => {

    return (
        <div className='container review'>
            <Title>Reviews</Title>
            {length === 0
                ? <div className='review-text'>
                    <p>We don't have any reviews for {title}.</p>
                </div>
                : <Reviews reviews={reviews}/>
            }
        </div>
    );
};