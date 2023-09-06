import React, {FC, useCallback, useMemo} from 'react';
import {Link} from "react-router-dom";
import {genderArr} from "../../mock/statick";
import {IDetails} from "../../../../Store/tmdbService/@types";
import {Title} from "../../../../components";
import './info.scss'

export type InfoType = {
    data: IDetails | undefined,
    type: boolean
}

export const Info: FC<InfoType> = ({data, type}) => {
    const infoLinks = () => {
        return (
            <div className='info-links'>
                {type &&
                    <Title>Personal Info</Title>
                }
                <ul>
                    <li>
                        <Link to={`https://twitter.com/${data?.external_ids.twitter_id}`}>
                            <i className='fa fa-twitter'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={`https://www.facebook.com/${data?.external_ids.facebook_id}`}>
                            <i className='fa fa-facebook'></i>
                        </Link>
                    </li>
                    {!type &&
                        <li>
                            {data?.homepage &&
                                <Link to={`${data?.homepage}`}>
                                    <i className='fa fa-home'></i>
                                </Link>
                            }
                        </li>
                    }
                </ul>
            </div>
        )
    }

    const infoPeople = () => {
        return (
            <>
                <div className='info-other'>
                    <h3>Known For</h3>
                    <p>{data?.known_for_department}</p>
                </div>
                <div className='info-other'>
                    <h3>Gender</h3>
                    <p>{genderArr[data?.gender! - 1]}</p>
                </div>
                <div className='info-other'>
                    <h3>Birthday</h3>
                    <p>{data?.birthday}</p>
                </div>
                {data?.deathday &&
                    <div className='info-other'>
                        <h3>Day of death</h3>
                        <p>{data?.deathday}</p>
                    </div>
                }
                <div className='info-other'>
                    <h3>Place of birth</h3>
                    <p>{data?.place_of_birth}</p>
                </div>
            </>
        )
    }

    const infoMovie = () => {
        return (
            <>
                <div className='info-other'>
                    <h3>Status</h3>
                    <p>{data?.status}</p>
                </div>
                <div className='info-other'>
                    <h3>Release date</h3>
                    <p>{data?.release_date ? data?.release_date : data?.first_air_date}</p>
                </div>
                {data?.last_air_date &&
                    <div className='info-other'>
                        <h3>End date</h3>
                        <p>{data?.last_air_date}</p>
                    </div>
                }
                {data?.number_of_seasons &&
                    <div className='info-other'>
                        <h3>Number of seasons</h3>
                        <p>{data?.number_of_seasons}</p>
                    </div>
                }
                {data?.number_of_episodes &&
                    <div className='info-other'>
                        <h3>Number of episodes</h3>
                        <p>{data?.number_of_episodes}</p>
                    </div>
                }
                {data?.budget &&
                    <div className='info-other'>
                        <h3>Budget</h3>
                        <p>$ {data?.budget},00</p>
                    </div>
                }
                {data?.revenue &&
                    <div className='info-other'>
                        <h3>Revenue</h3>
                        <p>$ {data?.revenue},00</p>
                    </div>
                }
            </>
        )
    }

    return (
        <div className='info'>
            {infoLinks()}
            {type
                ? infoPeople()
                : infoMovie()
            }
        </div>
    );
};