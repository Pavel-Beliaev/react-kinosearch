import React, {FC} from 'react';
import notImg from "../../../public/JPG/notImg.jpg";
import {useAppSelector} from "../../../Store/store";
import {PosterType} from "./types";
import '../sinipsis.scss'
import {Rating} from "../../Rating/Rating";

export const Poster:FC<PosterType> = ({poster, rating, keyType}) => {
    const {base_url, profileSize, posterSize} = useAppSelector((state) => state.config)

    return (
        <div className='poster'>
            {keyType
                ? <img
                    src={poster
                        ? `${base_url}${profileSize}${poster}`
                        : notImg
                    }
                    alt="poster"
                />
                : <>
                    <img
                        src={poster
                            ? `${base_url}${posterSize}${poster}`
                            : notImg
                        }
                        alt="poster"
                    />
                    <div className='poster-rating'>
                        <Rating
                            rating={rating}
                            fill='white'
                        />
                    </div>
                </>
            }
        </div>
    );
};