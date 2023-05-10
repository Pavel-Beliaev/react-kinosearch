import React from 'react';
import SliderShow from "../components/SliderShow/SliderShow";
import SliderTrailers from "../components/SliderTrailers/SliderTrailers";
import MovieSlideCard from "../components/Cards/MovieSlideCard";
import {SwiperSlide} from "swiper/react";
import SkeletonSliderShow from "../components/Skeletons/SkeletonSliderShow";
import {useGetTopRatedMoviesQuery, useGetTrendingMoviesQuery} from "../Store/tmdbService/endpoints";

const Home: React.FC = () => {
    const {data: trendDataList, isLoading: isLoadingTrend} = useGetTrendingMoviesQuery(1);
    const {data: topRateDataList, isLoading: isLoadingTopRate} = useGetTopRatedMoviesQuery(1);


    return (
        <>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Trending</h2>
                    <SliderShow
                        slideCount={4}
                        children={trendDataList?.results.map((film) => (
                            <SwiperSlide key={film.id}>
                                {isLoadingTrend
                                    ? <SkeletonSliderShow/>
                                    : <MovieSlideCard
                                        id={film.id}
                                        release={film.release_date}
                                        rating={film.vote_average}
                                        title={film.title}
                                        poster={film.poster_path}
                                    />
                                }
                            </SwiperSlide>
                        ))}
                    />
                </div>
            </div>
            <div className='trailers'>
                <SliderTrailers/>
            </div>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Top rated</h2>
                    <SliderShow
                        slideCount={4}
                        children={topRateDataList?.results.map((film) => (
                            <SwiperSlide key={film.id}>
                                {isLoadingTopRate
                                    ? <SkeletonSliderShow/>
                                    : <MovieSlideCard
                                        id={film.id}
                                        release={film.release_date}
                                        rating={film.vote_average}
                                        title={film.title}
                                        poster={film.poster_path}
                                    />
                                }
                            </SwiperSlide>
                        ))}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;