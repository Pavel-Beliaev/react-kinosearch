import React from 'react';
import notPicture from "../../public/PNG/placeholder.png";
import {useAppSelector} from "../../Store/store";

export type PeoplePosterType = {
    poster: string | null | undefined
}

const PeoplePoster:React.FC<PeoplePosterType> = ({poster}) => {
    const {base_url, profileSize} = useAppSelector((state) => state.config)


    return (
        <>
            <img
                src={poster ? `${base_url}${profileSize}${poster}` : notPicture}
                alt="poster"
            />
        </>
    );
};

export default PeoplePoster;