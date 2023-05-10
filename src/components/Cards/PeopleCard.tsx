import React from 'react';
import {Link} from "react-router-dom";
import notPicture from '../../public/JPG/placeholder.jpg'
import {useAppSelector} from "../../Store/store";
import {PeopleCardProps} from "./types";

const PeopleCard: React.FC<PeopleCardProps> = ({character, name, knownFor, profilePath, id}) => {
    const {base_url, profileSize} = useAppSelector((state) => state.config)

    const roleString = knownFor?.map((filmName) =>
        filmName.name && filmName.name ||
        filmName.title && filmName.title ||
        filmName.original_title && filmName.original_title
    ).join(', ')

    return (
        <Link to={`/people/${id}`}>
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
                        {roleString
                            ? roleString
                            : character
                        }
                    </p>
                </div>
            </div>
        </Link>

    );
};

export default PeopleCard;