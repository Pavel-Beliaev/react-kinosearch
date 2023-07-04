import React, {useState} from 'react';
import {useGetTopRatedMoviesQuery} from "../../../../Store/tmdbService/endpoints";
import {MovieSlideCard, SkeletonSliderShow, SliderShow, Switcher, Title} from "../../../../components";
import {SwiperSlide} from "swiper/react";
import {typeQueryFilms} from "../../mock/statick";

export const TopRateBlock = () => {
    const [switcherTopRateFilms, setSwitcherTopRateFilms] = useState(0)

    const {
        data: topRateDataList,
        isLoading: isLoadingTopRate
    } = useGetTopRatedMoviesQuery(typeQueryFilms[switcherTopRateFilms]);

    return (
        <div className='frameworks-container'>
            <Title>Top rated</Title>
            <Switcher
                switcher={switcherTopRateFilms}
                setSwitcher={setSwitcherTopRateFilms}
                title1={'Movies'}
                title2={'TV'}
                color={'#ffffff'}
            />
            <SliderShow slideCount={4}>
                {topRateDataList?.results
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
            </SliderShow>
        </div>
    );
};