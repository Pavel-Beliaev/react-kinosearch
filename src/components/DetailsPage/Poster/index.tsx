import React, {FC} from 'react';
import notImg from "../../../public/JPG/notImg.jpg";
import {useAppSelector} from "../../../Store/store";
import '../synopsis.scss'
import {useTypePage} from "../../../hooks/useTypePage";
import {Rating} from "../../Rating";

export type PosterType = {
    poster: string | null | undefined,
    rating: number | undefined,
}

export const Poster:FC<PosterType> = ({poster, rating}) => {
    const {base_url, profileSize, posterSize} = useAppSelector((state) => state.config)

    const {isType} = useTypePage()


    return (
        <div className='poster'>
            {isType
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