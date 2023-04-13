import React from 'react';
import CustomButton from "../CustomButton/CustomButton";
import './sliderheader.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay, EffectFade} from 'swiper';

import 'swiper/scss';
import 'swiper/scss/effect-fade'
import "swiper/scss/pagination";

const SliderHeader: React.FC = () => {

    return (
        <Swiper
            className='slider'
            modules={[Pagination, Autoplay, EffectFade]}
            effect='fade'
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true,
                modifierClass: '',
                horizontalClass: 'container-pagination'
            }}
        >
            {[
                {title: 'Horror', name: 'Name 1', color: 'red'},
                {title: 'Action', name: 'Name 2', color: 'green'},
                {title: 'Thriller', name: 'Name 3', color: 'blue'}
            ]
                .map((obj, index) => (
                    <SwiperSlide className='slider-slides'
                                 style={{backgroundColor: `${obj.color}`}}
                                 key={index}
                    >
                        {({isActive}) => (
                            <div className="container">
                                {isActive &&
                                    <div className='blurb'>
                                        <div className='slider-text'>
                                            <span>{obj.title}</span>
                                            <h1>{obj.name}</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis
                                                doloremque
                                                doloribus
                                                dolorum, ducimus eius eos eveniet harum id in ipsam numquam pariatur placeat
                                                praesentium
                                                quibusdam quis rem, repudiandae sequi! Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Consequatur culpa debitis, dignissimos distinctio dolorem
                                                dolores
                                                ex
                                                facere magni, modi nesciunt nulla obcaecati officiis, porro quae qui rem
                                                repellat
                                                suscipit veritatis!</p>
                                            <CustomButton children={<i className='fa fa-play'><span>Play trailer</span></i>}/>
                                        </div>
                                    </div>
                                }
                            </div>
                        )}

                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default SliderHeader;