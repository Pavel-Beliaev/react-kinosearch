import React from 'react';
import {useAppSelector} from "../../Store/store";
import {PeoplePosterType} from "./types";
import notFoto from '../../public/JPG/notFoto.jpg'


const PeoplePoster:React.FC<PeoplePosterType> = ({poster}) => {
    const {base_url, profileSize} = useAppSelector((state) => state.config)

    return (
        <>
            <img
                src={poster ? `${base_url}${profileSize}${poster}` : notFoto}
                alt="poster"
            />
        </>
    );
};

export default PeoplePoster;