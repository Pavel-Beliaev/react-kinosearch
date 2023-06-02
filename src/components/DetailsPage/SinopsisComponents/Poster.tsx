import React from 'react';
import notPicture from "../../../public/PNG/placeholder.png";
import Rating from "../../Rating/Rating";
import notFoto from "../../../public/JPG/notImg.jpg";
import {useAppSelector} from "../../../Store/store";

type PosterType = {
    poster: string | null | undefined,
    rating: number | undefined,
    keyType: boolean
}

const Poster: React.FC<PosterType> = ({poster, rating, keyType}) => {
    const {base_url, profileSize, posterSize} = useAppSelector((state) => state.config)


    return (
        <div className='page-poster'>
            {keyType
                ? <img
                    src={poster ? `${base_url}${profileSize}${poster}` : notFoto}
                    alt="poster"
                />
                :
                <>
                    <img
                        src={poster ? `${base_url}${posterSize}${poster}` : notPicture}
                        alt="poster"
                    />
                    <div className='page-rating'>
                        <Rating rating={rating} fill='white'/>
                    </div>
                </>
            }
        </div>
    );
};

export default Poster;