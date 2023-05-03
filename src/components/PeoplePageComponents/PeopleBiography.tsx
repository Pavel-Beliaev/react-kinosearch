import React from 'react';

export type PeopleBiographyType = {
    title: string,
    biography: string | null | undefined,
}

const PeopleBiography:React.FC<PeopleBiographyType> = ({title, biography}) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{biography}</p>
        </>
    );
};

export default PeopleBiography;