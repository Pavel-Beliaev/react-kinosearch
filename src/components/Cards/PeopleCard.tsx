import React from 'react';
import {Link, useLocation} from "react-router-dom";
import notFoto from '../../public/JPG/notImg.jpg'
import {useAppSelector} from "../../Store/store";
import {PeopleCardProps} from "./types";

const PeopleCard: React.FC<PeopleCardProps> = ({character, name, knownFor, profilePath, id}) => {
    const {pathname} = useLocation()

    const {base_url, profileSize} = useAppSelector((state) => state.config)

    const roleString = knownFor?.map((filmName) =>
        filmName.name &&
        filmName.name ||
        filmName.title &&
        filmName.title ||
        filmName.original_title &&
        filmName.original_title
    )
        .join(', ')

    return (
        <Link
            to={`/person/${id}`}
            state={{state: pathname}}
        >
            <div className='peopleCard'>
                <img
                    src={profilePath
                        ? `${base_url}${profileSize}${profilePath}`
                        : notFoto
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