import React, {useEffect, useState} from 'react';
import {useGetNewMoviesQuery, useGetPictureQuery, useGetVideoQuery} from "../Store/TMDB/tmdb.api";
import NewFilm from "../components/NewFilm";
import axios from "axios";
import SliderShow from "../components/SliderShow/SliderShow";
import SliderTrailers from "../components/SliderTrailers/SliderTrailers";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

// export const URL_ = 'https://image.tmdb.org/t/p/w500'
// const {data} = useGetNewMoviesQuery('en-US') // new films
// const {data} = useGetPictureQuery(10) // picture
// const data = useGetVideoQuery(550) // video

const Home = () => {
    // const [isObject, setIsObject] = useState({});
    //
    //
    //
    // const API_URL = 'https://api.themoviedb.org/3'
    // const CONTENT_URL = '/movie/550/videos'
    // const fetchMovies = async () => {
    //     const {data: {results}} = await axios.get(`${API_URL}${CONTENT_URL}`, {
    //         params: {
    //             api_key: process.env.REACT_APP_MOVIE_API_KEY
    //         }
    //     })
    //     setIsObject(results)
    // }
    // useEffect(() => {
    //     fetchMovies()
    // }, [])


    return (
        <>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Trending</h2>
                    <SliderShow/>
                </div>
            </div>
            <div className='trailers'>
                <SliderTrailers/>
            </div>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Popular</h2>
                    <SliderShow/>
                </div>
            </div>
        </>
    );
};

export default Home;