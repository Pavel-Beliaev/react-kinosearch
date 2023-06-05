import React from 'react';
import Rating from "../../Rating/Rating";
import notFoto from "../../../public/JPG/notImg.jpg";
import {useAppSelector} from "../../../Store/store";
import {PosterType} from "./types";
import '../sinipsis.scss'

const Poster: React.FC<PosterType> = ({poster, rating, keyType}) => {
    const {base_url, profileSize, posterSize} = useAppSelector((state) => state.config)

    return (
        <div className='poster'>
            {keyType
                ? <img
                    src={poster
                        ? `${base_url}${profileSize}${poster}`
                        : notFoto
                    }
                    alt="poster"
                />
                : <>
                    <img
                        src={poster
                            ? `${base_url}${posterSize}${poster}`
                            : notFoto
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

export default Poster;