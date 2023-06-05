import React from 'react';
import Reviews from "../../Reviews/Reviews";
import {MovieReviewsType} from "./types";
import './media.scss'

const MovieReviews: React.FC<MovieReviewsType> = ({length, title, reviews}) => {

    return (
        <div className='container review'>
            <h2>Reviews</h2>
            {length === 0
                ? <div className='review-text'>
                    <p>We don't have any reviews for {title}.</p>
                </div>
                : <Reviews reviews={reviews}/>
            }
        </div>
    );
};

export default MovieReviews;