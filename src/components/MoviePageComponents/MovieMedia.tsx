import React, {useState} from 'react';
import Switcher from "../Switcher/Switcher";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SliderShow from "../SliderShow/SliderShow";
import {SwiperSlide} from "swiper/react";
import {useAppSelector} from "../../Store/store";
import {MovieMediaType} from "./types";



const MovieMedia: React.FC<MovieMediaType> = ({ dataMovie}) => {
    const [switcher, setSwitcher] = useState(0);
    const [toggle, setToggle] = useState(0);

    const {base_url, backdropSize} = useAppSelector((state) => state.config)

    console.log(dataMovie)

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
                        ? <div className='page-videos'>
                            {dataMovie?.videos.results.map((param) => (
                                <div
                                    className='page-videos_item'
                                    key={param.key}
                                    onClick={() => {}}
                                >
                                    <div className='sliderTrailer-player'>
                                        <VideoPlayer
                                            keys={param.key}
                                        />
                                    </div>
                                    <p>{param.name}</p>
                                </div>
                            ))

                            }

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