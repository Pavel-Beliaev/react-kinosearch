import React from 'react';
import CustomButton from "../CustomButton/CustomButton";
import './headerslider.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay, EffectFade} from 'swiper';

import 'swiper/scss';
import 'swiper/scss/effect-fade'
import "swiper/scss/pagination";
import Rating from "../Rating/Rating";

const HeaderSlider: React.FC = () => {

    return (
        <Swiper
            className='sliderHeader'
            modules={[Pagination, Autoplay, EffectFade]}
            effect='fade'
            allowTouchMove={false}
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
                    <SwiperSlide className='sliderHeader-slides'
                                 style={{backgroundColor: `${obj.color}`}}
                                 key={index}
                    >
                        {({isActive}) => (
                            <div className="container">
                                {isActive &&
                                    <div className='blurb'>
                                        <div className='sliderHeader-text'>
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
                                            <div className='sliderHeader-button'>
                                                <Rating/>
                                                <CustomButton
                                                    children={<i className='fa fa-play'><span>Play trailer</span></i>}
                                                />
                                                <span className='sliderHeader-certificate'>18</span>
                                            </div>
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

export default HeaderSlider;