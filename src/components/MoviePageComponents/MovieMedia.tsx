import React, {useState} from 'react';
import Switcher from "../Switcher/Switcher";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SliderShow from "../SliderShow/SliderShow";
import {SwiperSlide} from "swiper/react";
import {useAppSelector} from "../../Store/store";
import {MovieMediaType} from "./types";

const MovieMedia: React.FC<MovieMediaType> = ({youtubeVideosKeys, dataMovie}) => {
    const [switcher, setSwitcher] = useState(0);
    const {base_url, backdropSize} = useAppSelector((state) => state.config)

    return (
        <div className='page-block'>
            <div className='container'>
                <h2>Media</h2>
                <div className='page-media'>
                    <Switcher
                        switcher={switcher}
                        setSwitcher={setSwitcher}
                        title1={'Trailers'}
                        title2={'Backgrounds'}
                        color={'#717171'}
                    />

                    {switcher === 0
                        ? <div className='sliderTrailer-player'>
                            <VideoPlayer
                                keysArray={youtubeVideosKeys}
                            />
                        </div>
                        : <div className='page-backdrops'>
                            <SliderShow
                                navigation={true}
                                slideCount={1}
                                children={dataMovie?.images.backdrops.map((path) =>
                                    <SwiperSlide key={path.file_path}>
                                        <img
                                            src={`${base_url}${backdropSize}${path.file_path}`}
                                            alt="backdrops"
                                        />
                                    </SwiperSlide>
                                )}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieMedia;