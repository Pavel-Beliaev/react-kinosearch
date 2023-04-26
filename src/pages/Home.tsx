import React from 'react';
import SliderShow from "../components/SliderShow/SliderShow";
import SliderTrailers from "../components/SliderTrailers/SliderTrailers";
import {
    useGetTopRatedMoviesQuery,
    useGetTrendingMoviesQuery
} from "../Store/tmdbService/tmdb.api";

const Home: React.FC = () => {
    const topRatedMoviesQuery = useGetTopRatedMoviesQuery(1);
    const trendingMoviesQuery = useGetTrendingMoviesQuery(1);


    return (
        <>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Trending</h2>
                    <SliderShow
                        arrMovies={trendingMoviesQuery.data?.results}
                        slideCount={4}/>
                </div>
            </div>
            <div className='trailers'>
                <SliderTrailers/>
            </div>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Top rated</h2>
                    <SliderShow
                        arrMovies={topRatedMoviesQuery.data?.results}
                        slideCount={4}/>
                </div>
            </div>
        </>
    );
};

export default Home;