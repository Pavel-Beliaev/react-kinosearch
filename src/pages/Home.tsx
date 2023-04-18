import React from 'react';
import MovieSlideCard from "../components/Cards/MovieSlideCard";
import SliderShow from "../components/SliderShow/SliderShow";
import SliderTrailers from "../components/SliderTrailers/SliderTrailers";

const Home = () => {

    return (
        <>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Trending</h2>
                    <SliderShow children={<MovieSlideCard/>} slideCount={4}/>
                </div>
            </div>
            <div className='trailers'>
                <SliderTrailers/>
            </div>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Popular</h2>
                    <SliderShow children={<MovieSlideCard/>} slideCount={4}/>
                </div>
            </div>
        </>
    );
};

export default Home;