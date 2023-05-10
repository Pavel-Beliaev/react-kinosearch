import React from 'react';
import {Link} from "react-router-dom";

export type PeopleInfoType = {
    title: string | null | undefined,
    gender: number | null | undefined,
    birthday: string | null | undefined,
    deathday: string | null | undefined,
    placeOfBirth: string | null | undefined,
    knownFor: string | undefined,
    twitterLink: string | null | undefined,
    facebookLink: string | null | undefined,
}

export const genderArr = ['female', 'male']

const PeopleInfo: React.FC<PeopleInfoType> = ({
                                                  facebookLink,
                                                  twitterLink,
                                                  knownFor,
                                                  title,
                                                  gender,
                                                  birthday,
                                                  deathday,
                                                  placeOfBirth
                                              }) => {
    return (
        <>
            <div className='page-info-links'>
                <h2>{title}</h2>

                <ul>
                    <li>
                        <Link to={`https://twitter.com/${twitterLink}`}>
                            <i className='fa fa-twitter'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={`https://www.facebook.com/${facebookLink}`}>
                            <i className='fa fa-facebook'></i>
                        </Link>
                    </li>

                </ul>
            </div>
            <div className='page-info-other'>
                <h3>Known For</h3>
                <p>{knownFor}</p>
            </div>
            <div className='page-info-other'>
                <h3>Gender</h3>
                <p>{genderArr[gender! - 1]}</p>
            </div>
            <div className='page-info-other'>
                <h3>Birthday</h3>
                <p>{birthday}</p>
            </div>
            {deathday &&
                <div className='page-info-other'>
                    <h3>Deathday</h3>
                    <p>{deathday}</p>
                </div>
            }
            <div className='page-info-other'>
                <h3>Place of birth</h3>
                <p>{placeOfBirth}</p>
            </div>
        </>
    );
};

export default PeopleInfo;