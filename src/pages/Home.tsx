import React, {useEffect, useState} from 'react';
import {useGetNewMoviesQuery, useGetPictureQuery, useGetVideoQuery} from "../Store/TMDB/tmdb.api";
import NewFilm from "../components/NewFilm";
import axios from "axios";
import SliderShow from "../components/SliderShow/SliderShow";
import SliderTrailers from "../components/SliderTrailers/SliderTrailers";

// export const URL_ = 'https://image.tmdb.org/t/p/w500'

const Home = () => {
    // const [isObject, setIsObject] = useState({});
    // // const {data} = useGetNewMoviesQuery('en-US') // new films
    // // const {data} = useGetPictureQuery(10) // picture
    // // const data = useGetVideoQuery(550) // video
    //
    //
    // const API_URL = 'https://api.themoviedb.org/3'
    // const fetchMovies = async () => {
    //     const data = await axios.get(`${API_URL}`, {
    //         params: {
    //             api_key: 'd2e6a036f6b0dbeacdb1e6d2fc5af3aa'
    //         }
    //     })
    //     console.log(data)
    // }
    //
    //
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