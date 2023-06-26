import React, {FC} from 'react';
import '../media.scss'
import {Reviews} from "../../../Reviews";
import {ResultsReviewsType} from "../../../../Store/tmdbService/@types";
import Title from "../../../Title";

export type MovieReviewsType = {
    length: number | undefined,
    title: string | undefined,
    reviews: ResultsReviewsType[] | undefined,
}

export const MovieReviews:FC<MovieReviewsType> = ({length, title, reviews}) => {

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