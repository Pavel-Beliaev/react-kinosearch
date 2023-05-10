import React from 'react';
import {PeopleBiographyType} from "./types";

const PeopleBiography:React.FC<PeopleBiographyType> = ({title, biography}) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{biography}</p>
        </>
    );
};

export default PeopleBiography;