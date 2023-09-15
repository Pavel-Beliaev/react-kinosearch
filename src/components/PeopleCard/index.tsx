import React, {FC} from 'react';
import {Link, useLocation} from "react-router-dom";
import notImg from '../../assets/JPG/notImg.jpg'
import {useAppSelector} from "../../Store/store";
import {IKnowFor} from "../../Store/tmdbService/@types";
import './peopleCard.scss'

export type PeopleCardProps = {
    name: string,
    knownFor?: IKnowFor[],
    character?: string,
    profilePath: string,
    id: number
}

export const PeopleCard: FC<PeopleCardProps> = ({character, name, knownFor, profilePath, id}) => {
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
        <div className='peopleCard'>
            <Link
                to={`/person/${id}`}
                state={{state: pathname}}
            >
                <img
                    src={`${base_url}${profileSize}${profilePath}`}
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
            </Link>
        </div>
    );
};