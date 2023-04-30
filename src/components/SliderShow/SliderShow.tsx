import React from 'react';
import './slidershow.scss'
import {Scrollbar, Mousewheel, Keyboard, Navigation} from "swiper";
import {Swiper} from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";
import {SliderProps} from "../../@types/@types";



const SliderShow: React.FC<SliderProps> = ({navigation, slideCount, children}) => {

    return (
        <>
            <Swiper
                scrollbar={{
                    hide: false,
                    draggable: true,
                    horizontalClass: 'scroll-horizontal'
                }}
                navigation={navigation ? navigation : false}
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

export default SliderShow;