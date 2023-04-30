import React, {useState} from 'react';
import notPicture from '../public/PNG/placeholder.png'
import Rating from "../components/Rating/Rating";
import SliderShow from "../components/SliderShow/SliderShow";
import PeopleCard from "../components/Cards/PeopleCard";
import {Link, useParams} from "react-router-dom";
import {useGetDetailsMovieQuery} from "../Store/tmdbService/tmdb.api";
import {useAppSelector} from "../Store/store";
import {SwiperSlide} from "swiper/react";
import Switcher from "../components/Switcher/Switcher";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Reviews from "../components/Reviews/Reviews";


const MoviePage: React.FC = () => {
    const [switcher, setSwitcher] = useState(0)
    const {id} = useParams()
    const {data} = useGetDetailsMovieQuery(Number(id))
    const {base_url, backdropSize, posterSize} = useAppSelector((state) => state.config)
    const youtubeVideosKeys = data?.videos.results.filter((el) => el.site === 'YouTube').map((elem) => elem.key)


    return (
        <div className='page'>
            <div className='container'>
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
                                        key={crew.credit_id}
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
            </div>
            <div className='container'>
                <h2>Top Billed Cast</h2>
                <div className='page-slider'>
                    <SliderShow
                        slideCount={5}
                        children={data?.credits.cast.map((cast) => (
                            <SwiperSlide key={cast.id}>
                                <PeopleCard
                                    name={cast.name}
                                    character={cast.character}
                                    profilePath={cast.profile_path}
                                />
                            </SwiperSlide>
                        ))}
                    />
                </div>
            </div>
            <div className='page-block'>
                <div className='container'>
                    <h2>Media</h2>
                    <div className='page-media'>
                        <Switcher
                            switcher={switcher}
                            setSwitcher={setSwitcher}
                        />

                        {switcher === 0
                            ? <div className='sliderTrailer-player'>
                                <VideoPlayer
                                    keysArray={youtubeVideosKeys}
                                />
                            </div>
                            : <div className='page-backdrops'>
                                <SliderShow
                                    navigation={true}
                                    slideCount={1}
                                    children={data?.images.backdrops.map((path) =>
                                        <SwiperSlide key={path.file_path}>
                                            <img
                                                src={`${base_url}${backdropSize}${path.file_path}`}
                                                alt="backdrops"
                                            />
                                        </SwiperSlide>
                                    )}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='container'>
                <Reviews
                    reviews={data?.reviews.results}
                />
            </div>
        </div>
    );
};

export default MoviePage;


