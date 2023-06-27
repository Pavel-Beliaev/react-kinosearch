import React, {FC, useState} from 'react';
import {SwiperSlide} from "swiper/react";
import {useAppSelector} from "../../../Store/store";
import './media.scss'
import {VideoPlayer} from "../../VideoPlayer";
import {Switcher} from "../../Switcher";
import {SliderShow} from "../../SliderShow";
import {IDetails} from "../../../Store/tmdbService/@types";
import {Title} from "../../Title";

export type MovieMediaType = {
    dataMovie: IDetails | undefined,
    pict: string | null | undefined
}

export const MovieMedia: FC<MovieMediaType> = ({dataMovie}) => {
    const [switcher, setSwitcher] = useState(0);
    const {base_url, backdropSize} = useAppSelector((state) => state.config)


    return (
        <div className='background'>
            <div className='container mediaBlock'>
                <Title>Media</Title>
                <div className='mediaBlock-media'>
                    <Switcher
                        switcher={switcher}
                        setSwitcher={setSwitcher}
                        title1={'Trailers'}
                        title2={'Backgrounds'}
                        color={'#717171'}
                    />
                    {switcher === 0
                        ? <div className='mediaBlock-videos'>
                            {dataMovie?.videos.results
                                .map((param) => (
                                    <div
                                        className='mediaBlock-videos_item'
                                        key={param.key}
                                    >
                                        <div className='sliderTrailer-player'>
                                            <VideoPlayer keys={param.key}/>
                                        </div>
                                        <p>{param.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        : <div className='mediaBlock-backdrops'>
                            <SliderShow
                                navigation={true}
                                slideCount={1}
                                children={dataMovie?.images.backdrops
                                    .map((path) =>
                                        <SwiperSlide key={path.file_path}>
                                            <img
                                                src={`${base_url}${backdropSize}${path.file_path}`}
                                                alt="backdrops"
                                            />
                                        </SwiperSlide>
                                    )
                                }
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

