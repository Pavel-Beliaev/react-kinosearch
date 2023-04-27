import React from 'react';
import CustomButton from "../CustomButton/CustomButton";
import './headerslider.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay, EffectFade} from 'swiper';
import {useGetNewMoviesQuery} from "../../Store/tmdbService/tmdb.api";
import Rating from "../Rating/Rating";
import 'swiper/scss';
import 'swiper/scss/effect-fade'
import "swiper/scss/pagination";
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {setActiveModal} from "../../Store/config/slice";
import {Link} from "react-router-dom";

const HeaderSlider: React.FC = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector((state) => state.config)
    const {base_url, backdropSize} = useAppSelector((state) => state.config)
    const {data} = useGetNewMoviesQuery();

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
            {data?.results.slice(0, 3).map((film, index) => (
                <SwiperSlide className='sliderHeader-slides'
                             style={{backgroundImage: `url(${base_url}${backdropSize}${film.backdrop_path})`}}
                             key={index}
                >
                    {({isActive}) => (
                        <div className="container">
                            {isActive &&
                                <div className='blurb'>
                                    <div className='sliderHeader-text'>
                                        <span>{film.genre_ids.map((id) =>
                                            genres.find(el => el.id === id)?.name
                                        ).join(', ')}</span>
                                        <h1>{film.title}</h1>
                                        <p>{film.overview}</p>
                                        <div className='sliderHeader-button'>
                                            <Rating rating={film.vote_average} fill='none'/>
                                            <CustomButton
                                                onClick={() => dispatch(setActiveModal({active: true, id: film.id}))}
                                                children={<i className='fa fa-play'><span>Play trailer</span></i>}
                                            />
                                            <Link className='sliderHeader-readmore'
                                                  to={`/movies/${film.id}`}>
                                                Read more
                                            </Link>
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