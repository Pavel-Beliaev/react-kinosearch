import React from 'react';
import './rating.scss'
import {RatingProps} from "../../@types/@types";



const Rating: React.FC<RatingProps> = ({rating = 7.4}) => {

    const circumference = 2 * Math.PI * 25;
    const offset = circumference - ((rating ? rating : 0) / 10) * circumference;


    const getColor = (rating: number) => {
        if (rating <= 3) {
            return "red";
        } else if (rating <= 7) {
            return "orange";
        } else {
            return "green";
        }
    };
    const color = getColor(rating ? rating : 0)


    return (
        <>
            <div className="rating-indicator">
                <svg
                    width='54'
                    height='54'
                >
                    <circle
                        cx="27"
                        cy="27"
                        r="25"
                        stroke="#ccc"
                        strokeWidth="2"
                        fill="none"
                    />
                    <circle
                        className="indicator"
                        cx="27"
                        cy="27"
                        r="25"
                        stroke={color}
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        fill="none"
                    />
                </svg>
                <div className="rating">{rating ? rating : 0}</div>
            </div>
        </>

    );
};

export default Rating;