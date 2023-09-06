import React, {FC} from 'react';
import notImg from "../../../../assets/JPG/notImg.jpg";
import {useAppSelector} from "../../../../Store/store";
import './poster.scss'
import {Rating} from "../../../../components";

export type PosterType = {
    poster: string | null | undefined,
    rating: number | undefined,
    type: boolean
}

export const Poster: FC<PosterType> = ({poster, rating, type}) => {
    const {base_url, profileSize, posterSize} = useAppSelector((state) => state.config)

    return (
        <div className='poster'>
            {base_url &&
                <img
                    src={poster
                        ? type ? `${base_url}${profileSize}${poster}` : `${base_url}${posterSize}${poster}`
                        : notImg
                    }
                    alt="poster"
                />
            }
            {!type &&
                <div className='poster-rating'>
                    <Rating
                        rating={rating}
                        fill='white'
                    />
                </div>
            }
        </div>
    );
};