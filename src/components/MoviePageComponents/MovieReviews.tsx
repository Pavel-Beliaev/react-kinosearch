import React from 'react';
import Reviews from "../Reviews/Reviews";
import {ResultsReviewsType} from "../../Store/tmdbService/@types";

export type MovieReviewsType = {
    length: number | undefined,
    title: string | undefined,
    reviews: ResultsReviewsType[] | undefined,
}

const MovieReviews: React.FC<MovieReviewsType> = ({length, title, reviews}) => {


    return (
        <div className='container'>
            <h2>Reviews</h2>
            {length === 0
                ? <div className='page-review'>
                    <p>We don't have any reviews for {title}. </p>
                </div>
                : <Reviews
                    reviews={reviews}
                />
            }
        </div>
    );
};

export default MovieReviews;