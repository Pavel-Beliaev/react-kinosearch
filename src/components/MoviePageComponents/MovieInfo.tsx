import React from 'react';
import {Link} from "react-router-dom";

export type MovieInfoType = {
    twitterLink: string | null | undefined,
    facebookLink: string | null | undefined,
    homepage: string | null | undefined,
    status: string | null | undefined,
    releaseDate: string | null | undefined,
    budget: number | null | undefined,
    revenue: number | null | undefined,
}

const MovieInfo:React.FC<MovieInfoType> = ({twitterLink, facebookLink, budget, revenue, status, homepage, releaseDate}) => {

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
            <div className='page-info-other'>
                <h3>Budget</h3>
                <p>$ {budget},00</p>
            </div>
            <div className='page-info-other'>
                <h3>Revenue</h3>
                <p>$ {revenue},00</p>
            </div>
        </>
    );
};

export default MovieInfo;