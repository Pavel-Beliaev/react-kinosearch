import React, {useState} from 'react';
import './slidertrailers.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import SwiperClass from 'swiper/types/swiper-class';
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import {useGetPopularMoviesQuery, useGetVideoByIdQuery} from "../../Store/tmdbService/tmdb.api";
import {useAppSelector} from "../../Store/store";

const SliderTrailers: React.FC = () => {
    const [thumbsSwiperTop, setThumbsSwiperTop] = useState<SwiperClass>();
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const {base_url, posterSize, backdropSize} = useAppSelector((state) => state.config);

    const {data: popularMoviesDataList} = useGetPopularMoviesQuery(1);
    const getId = popularMoviesDataList?.results.map((obj) => obj.id);
    const {data: videoDataList} = useGetVideoByIdQuery(getId ? getId[slideIndex] : 0);

    const foundVideo = videoDataList?.results.find((video) =>
        video.name.toLowerCase().includes('official trailer'))
    const video = (foundVideo || videoDataList?.results[0])

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
                {popularMoviesDataList?.results.map((backdrop) => (
                    <SwiperSlide key={backdrop.backdrop_path}>
                        <img src={`${base_url}${backdropSize}${backdrop.backdrop_path}`} alt='backdrop'/>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className='container sliderTrailer'>
                <h2>Trailers</h2>
                <div
                    style={video ? {} : {paddingTop: '47.3%'}}
                    className='sliderTrailer-player'>
                    {video &&
                        <VideoPlayer
                            keys={video?.key}
                        />
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
                    {popularMoviesDataList?.results.map((poster) => (
                        <SwiperSlide key={poster.id}>
                            <img src={`${base_url}${posterSize}${poster.poster_path}`} alt='poster'/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    );
};

export default SliderTrailers;