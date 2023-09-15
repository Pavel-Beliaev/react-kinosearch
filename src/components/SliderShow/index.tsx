import React, {FC} from "react";
import "./slidershow.scss";
import {Mousewheel, Keyboard, Navigation} from "swiper";
import {Swiper} from "swiper/react";
import "swiper/scss";
import 'swiper/css/navigation';

export interface SliderProps {
    slideCount: number;
    children: React.ReactElement | React.ReactNode;
}

export const SliderShow: FC<SliderProps> = ({
                                                slideCount,
                                                children,
                                            }) => {
    return (
        <>
            <Swiper
                slidesPerView={slideCount}
                spaceBetween={20}
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                navigation={true}
                modules={[Mousewheel, Keyboard, Navigation]}
                className="sliderShow"
            >
                {children}
            </Swiper>
        </>
    );
};
