import React from 'react';
import notPicture from '../public/PNG/placeholder.png'
import Rating from "../components/Rating/Rating";
import SliderShow from "../components/SliderShow/SliderShow";
import PeopleCard from "../components/Cards/PeopleCard";
import {Link, useParams} from "react-router-dom";
import {useGetDetailsMovieQuery} from "../Store/tmdbService/tmdb.api";
import {useAppSelector} from "../Store/store";


const MoviePage: React.FC = () => {
    const {id} = useParams()
    const {data} = useGetDetailsMovieQuery(Number(id))
    const {base_url, posterSize} = useAppSelector((state) => state.config)
    console.log(data)
    console.log()

    return (
        <div className='container'>
            <div className='page'>
                <h2>Synopsis</h2>
                <div className='page-synopsis'>
                    <div className='page-poster'>
                        <img
                            src={data?.poster_path ? `${base_url}${posterSize}${data?.poster_path}` : notPicture}
                            alt="poster"
                        />
                        <div className='page-rating'>
                            <Rating rating={data?.vote_average} fill='white'/>
                        </div>
                    </div>
                    <div className='page-overview'>
                        <h3>Overview</h3>
                        <p>{data?.overview}</p>
                        <div className='page-credits'>
                            {data?.credits.crew
                                .filter(el => el.job === 'Characters'
                                    || el.job === 'Director'
                                    || el.job === 'Writer'
                                    || el.job === 'Producer'
                                    || el.job === 'Creator'
                                ).map((crew) => (
                                    <div
                                        key={crew.id}
                                        className='page-crew'>
                                        <h3>{crew.name}</h3>
                                        <p>{crew.job}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='page-info'>
                        <div className='page-info-links'>
                            <ul>
                                <li>
                                    <Link to="https://twitter.com">
                                        <i className='fa fa-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.facebook.com">
                                        <i className='fa fa-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="http://plus.google.com/">
                                        <i className='fa fa-google-plus'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='page-info-other'>
                            <h3>Status</h3>
                            <p>{data?.status}</p>
                        </div>
                        <div className='page-info-other'>
                            <h3>Release date</h3>
                            <p>{data?.release_date}</p>
                        </div>
                        <div className='page-info-other'>
                            <h3>Original Language</h3>
                            <p>Eng</p>
                        </div>
                        <div className='page-info-other'>
                            <h3>Budget</h3>
                            <p>$ {data?.budget},00</p>
                        </div>
                        <div className='page-info-other'>
                            <h3>Revenue</h3>
                            <p>$ {data?.revenue},00</p>
                        </div>
                    </div>
                </div>
                <h2>Top Billed Cast</h2>
                <div>

                </div>
                {/*<div>*/}
                {/*    <h2>Media</h2>*/}
                {/*</div>*/}
                {/*<div className='container'>*/}
                {/*    <div>*/}
                {/*        <h2>Comments</h2>*/}
                {/*        */}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h2>Leave a comment</h2>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default MoviePage;