import React from 'react';
import notPicture from "../../public/PNG/placeholder.png";
import Rating from "../Rating/Rating";
import {useAppSelector} from "../../Store/store";

export type MoviePosterType = {
    poster: string | null | undefined,
    rating: number | undefined,
}

const MoviePoster:React.FC<MoviePosterType> = ({poster, rating}) => {
    const {base_url, posterSize} = useAppSelector((state) => state.config)


    return (
        <>
            <img
                src={poster ? `${base_url}${posterSize}${poster}` : notPicture}
                alt="poster"
            />
            <div className='page-rating'>
                <Rating rating={rating} fill='white'/>
            </div>
        </>
    );
};

export default MoviePoster;