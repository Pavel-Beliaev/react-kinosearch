import React, {FC, useEffect, useState} from 'react';
import './slidertrailers.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import SwiperClass from 'swiper/types/swiper-class';
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import {useAppSelector} from "../../Store/store";
import {useGetPopularMoviesQuery, useLazyGetVideoByIdQuery} from "../../Store/tmdbService/endpoints";
import {VideoPlayer} from "../VideoPlayer";

export const SliderTrailers:FC = () => {
    const [thumbsSwiperTop, setThumbsSwiperTop] = useState<SwiperClass>();
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const {base_url, posterSize, backdropSize} = useAppSelector((state) => state.config);

    const {data: popularMoviesDataList} = useGetPopularMoviesQuery(1);
    const [target, data] = useLazyGetVideoByIdQuery();

    const getId = popularMoviesDataList?.results
        .map((obj) => obj.id)[slideIndex];
    const moviesKeys = data.data?.results
        .filter((el) => el.type === 'Trailer')
        .map((elem) => elem.key)

    useEffect(() => {
        target(getId)
    }, [getId])


    return (
        <>
            <Swiper
                onSwiper={setThumbsSwiperTop}
                loop={true}
                spaceBetween={30}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiperTop"
                allowTouchMove={false}
            >
                {popularMoviesDataList?.results
                    .map((backdrop) => (
                        <SwiperSlide key={backdrop.backdrop_path}>
                            <img
                                src={`${base_url}${backdropSize}${backdrop.backdrop_path}`}
                                alt='backdrop'
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className='container sliderTrailer'>
                <h2>Trailers</h2>
                <div
                    style={moviesKeys
                        ? {}
                        : {paddingTop: '47.3%'}
                    }
                    className='sliderTrailer-player trailers-player'>
                    {moviesKeys &&
                        <VideoPlayer keysArray={moviesKeys}/>
                    }
                </div>
                <Swiper
                    loop={true}
                    thumbs={{
                        swiper: thumbsSwiperTop
                    }}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="swiperBottom"
                    slideToClickedSlide={true}
                    onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
                >
                    {popularMoviesDataList?.results
                        .map((poster) => (
                            <SwiperSlide key={poster.id}>
                                <img
                                    src={`${base_url}${posterSize}${poster.poster_path}`}
                                    alt='poster'
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </>
    );
};