import React, {FC} from 'react';
import './slidershow.scss'
import {Scrollbar, Mousewheel, Keyboard, Navigation} from "swiper";
import {Swiper} from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";

export interface SliderProps {
    navigation?: boolean,
    slideCount: number,
    children: React.ReactElement | React.ReactNode
}

export const SliderShow:FC<SliderProps> = ({navigation, slideCount, children}) => {

    return (
        <>
            <Swiper
                scrollbar={{
                    hide: false,
                    draggable: true,
                    horizontalClass: 'scroll-horizontal'
                }}
                navigation={navigation
                    ? navigation
                    : false
                }
                slidesPerView={slideCount}
                spaceBetween={30}
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                modules={[Scrollbar, Mousewheel, Keyboard, Navigation]}
                className="swiperTrending"
                
            >
                {children}
            </Swiper>
        </>
    );
};