import React from 'react';
import {Link} from "react-router-dom";
import {MovieInfoType} from "./types";

const MovieInfo: React.FC<MovieInfoType> = ({
                                                twitterLink,
                                                facebookLink,
                                                budget,
                                                revenue,
                                                status,
                                                homepage,
                                                releaseDate,
                                                end_date,
                                                number_of_seasons,
                                                number_of_episodes,
                                            }) => {

    return (
        <>
            <div className='page-info-links'>
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
                    <li>
                        {homepage &&
                            <Link to={`${homepage}`}>
                                <i className='fa fa-home'></i>
                            </Link>
                        }
                    </li>
                </ul>
            </div>
            <div className='page-info-other'>
                <h3>Status</h3>
                <p>{status}</p>
            </div>
            <div className='page-info-other'>
                <h3>Release date</h3>
                <p>{releaseDate}</p>
            </div>
            {end_date && <div className='page-info-other'>
                <h3>End date</h3>
                <p>{end_date}</p>
            </div>}
            {number_of_seasons && <div className='page-info-other'>
                <h3>Number of seasons</h3>
                <p>{number_of_seasons}</p>
            </div>}
            {number_of_episodes && <div className='page-info-other'>
                <h3>Number of episodes</h3>
                <p>{number_of_episodes}</p>
            </div>}
            {budget && <div className='page-info-other'>
                <h3>Budget</h3>
                <p>$ {budget},00</p>
            </div>}
            {revenue && <div className='page-info-other'>
                <h3>Revenue</h3>
                <p>$ {revenue},00</p>
            </div>}
        </>
    );
};

export default MovieInfo;