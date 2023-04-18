import React from 'react';
import {Link} from "react-router-dom";
import {useGetConfigurationQuery} from "../../Store/tmdbService/tmdb.api";
import {IKnowFor} from "../../Store/tmdbService/@types";

type PeopleCardProps = {
    name: string,
    knownFor: IKnowFor[]
    profilePath: string,
}
const PeopleCard:React.FC<PeopleCardProps> = ({name, knownFor, profilePath}) => {
    const {data: images} = useGetConfigurationQuery();

    const roleString = knownFor.map((filmName) =>
            filmName.name && filmName.name ||
            filmName.title && filmName.title ||
            filmName.original_title && filmName.original_title
    ).join(', ')



    return (
        <Link to='1'>
            <div className='peopleCard'>
                <img
                    src={`${images?.images.base_url}${images?.images.poster_sizes[2]}${profilePath}`}
                    alt="people"
                />
                <div className='peopleCard-text'>
                    <h4>{name}</h4>
                    <p>
                        {roleString}
                    </p>
                </div>
            </div>
        </Link>

    );
};

export default PeopleCard;