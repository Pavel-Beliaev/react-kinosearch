import React from 'react';
import './slidershow.scss'
import {Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/scss";
import "swiper/scss/scrollbar";
import CardMovieSlider from "../CardMovieSlider";

const SliderShow = () => {
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: false,
                    draggable: true,
                    horizontalClass: 'scroll-horizontal'
                }}
                slidesPerView={4}
                spaceBetween={30}

                modules={[Scrollbar]}
                className="swiperTrending"
            >
                <SwiperSlide><CardMovieSlider/></SwiperSlide>
                <SwiperSlide><CardMovieSlider/></SwiperSlide>
                <SwiperSlide><CardMovieSlider/></SwiperSlide>
                <SwiperSlide><CardMovieSlider/></SwiperSlide>
                <SwiperSlide><CardMovieSlider/></SwiperSlide>
                <SwiperSlide><CardMovieSlider/></SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderShow;