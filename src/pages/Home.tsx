import React, {useEffect, useState} from 'react';
import {SwiperSlide} from "swiper/react";
import {useGetTopRatedMoviesQuery, useGetTrendingMoviesQuery} from "../Store/tmdbService/endpoints";
import {typeQueryFilms, typeQueryTrendingFilms} from "../mock/statick";
import {MovieSlideCard, SkeletonSliderShow, SliderShow, SliderTrailers, Switcher} from "../components";

const Home: React.FC = () => {
    const [switcherTrendingFilms, setSwitcherTrendingFilms] = useState(0)
    const [switcherTopRateFilms, setSwitcherTopRateFilms] = useState(0)


    const {
        data: trendDataList,
        isLoading: isLoadingTrend
    } = useGetTrendingMoviesQuery(typeQueryTrendingFilms[switcherTrendingFilms]);
    const {
        data: topRateDataList,
        isLoading: isLoadingTopRate
    } = useGetTopRatedMoviesQuery(typeQueryFilms[switcherTopRateFilms]);

    return (
        <>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Trending</h2>
                    <Switcher
                        switcher={switcherTrendingFilms}
                        setSwitcher={setSwitcherTrendingFilms}
                        title1={'Today'}
                        title2={'This week'}
                        color={'#ffffff'}
                    />
                    <SliderShow
                        slideCount={4}
                        children={trendDataList?.results
                            .map((film) => (
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
                            ))
                        }
                    />
                </div>
            </div>
            <div className='trailers'>
                <SliderTrailers/>
            </div>
            <div className='slider-show'>
                <div className='frameworks-container'>
                    <h2>Top rated</h2>
                    <Switcher
                        switcher={switcherTopRateFilms}
                        setSwitcher={setSwitcherTopRateFilms}
                        title1={'Movies'}
                        title2={'TV'}
                        color={'#ffffff'}
                    />
                    <SliderShow
                        slideCount={4}
                        children={topRateDataList?.results
                            .map((film) => (
                                <SwiperSlide key={film.id}>
                                    {isLoadingTopRate
                                        ? <SkeletonSliderShow/>
                                        : <MovieSlideCard
                                            id={film.id}
                                            release={film.release_date}
                                            rating={film.vote_average}
                                            title={film.title || film.name}
                                            poster={film.poster_path}
                                            first_air_date={film.first_air_date}
                                        />
                                    }
                                </SwiperSlide>
                            ))
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default Home;