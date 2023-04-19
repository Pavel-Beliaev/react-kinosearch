import React from 'react';
import {Link} from "react-router-dom";
import {PeopleCardProps} from "../../@types/@types";
import notPicture from '../../public/JPG/placeholder.jpg'
import {useAppSelector} from "../../Store/store";


const PeopleCard: React.FC<PeopleCardProps> = ({name, knownFor, profilePath}) => {
    const {base_url, profileSize} = useAppSelector((state) => state.config)

    const roleString = knownFor.map((filmName) =>
        filmName.name && filmName.name ||
        filmName.title && filmName.title ||
        filmName.original_title && filmName.original_title
    ).join(', ')

    return (
        <Link to='1'>
            <div className='peopleCard'>
                <img
                    src={profilePath
                       ? `${base_url}${profileSize}${profilePath}`
                        : notPicture
                    }
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