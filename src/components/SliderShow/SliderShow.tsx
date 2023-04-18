import React from 'react';
import './slidershow.scss'
import {Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";

interface SliderProps {
    children: React.ReactNode
    slideCount: number
}

const SliderShow: React.FC<SliderProps> = ({children, slideCount}) => {
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: false,
                    draggable: true,
                    horizontalClass: 'scroll-horizontal'
                }}
                slidesPerView={slideCount}
                spaceBetween={30}

                modules={[Scrollbar]}
                className="swiperTrending"
            >
                <SwiperSlide>{children}</SwiperSlide>
                <SwiperSlide>{children}</SwiperSlide>
                <SwiperSlide>{children}</SwiperSlide>
                <SwiperSlide>{children}</SwiperSlide>
                <SwiperSlide>{children}</SwiperSlide>
                <SwiperSlide>{children}</SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderShow;