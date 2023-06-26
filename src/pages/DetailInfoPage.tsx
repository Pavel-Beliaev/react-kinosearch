import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {SwiperSlide} from "swiper/react";
import {
    useGetAllMoviesQuery,
    useLazyGetDetailsQuery,
} from "../Store/tmdbService/endpoints";
import {
    MovieMedia,
    MovieReviews,
    MovieSlideCard,
    PeopleCard,
    SkeletonPeopleCard, SkeletonSliderShow, SliderShow,
    SliderWrapper, Synopsis, TablePeopleActing
} from "../components";
import {useScroll} from "../hooks/useScroll";
import {useTypePage} from "../hooks/useTypePage";
import Title from "../components/Title";

export const DetailInfoPage: FC = () => {
    const {isType, type, id} = useTypePage()
    const scrollTo = useScroll()

    const [fetchMovie, {data, isFetching: isFetchingDetails}] = useLazyGetDetailsQuery()
    const {data: dataAllMovies, isFetching} = useGetAllMoviesQuery({
        peopleId: data?.id,
        type: 'movie',
        typeQuery: 'discover',
    });

    useEffect(() => {
        scrollTo(115, 0, "smooth")
    }, [id])

    useEffect(() => {
        fetchMovie({
            type: type,
            id: Number(id)
        })
    }, [id])


    return (
        <div>
            <div className='page-frame'>
                <div className='frameworks-container'>
                    <Title>Synopsis</Title>
                    <Synopsis
                        data={data}
                        isFetching={isFetchingDetails}
                    />
                </div>
            </div>
            <div className='page-frame'>
                <div className='frameworks-container'>
                    <Title>{isType ? 'Known For' : 'Top billed cast'}</Title>
                    <SliderShow slideCount={4}>
                        {isType
                            ? dataAllMovies?.results
                                .map((film) => (
                                    <SwiperSlide key={film.id}>
                                        {isFetching
                                            ? <SkeletonSliderShow/>
                                            : <MovieSlideCard
                                                title={film.title}
                                                rating={film.vote_average}
                                                poster={film.poster_path}
                                                id={film.id}
                                            />
                                        }
                                    </SwiperSlide>
                                ))
                            : data?.credits.cast
                                .map((cast) => (
                                    <SwiperSlide key={cast.credit_id}>
                                        {isFetchingDetails
                                            ? <SkeletonPeopleCard/>
                                            : <PeopleCard
                                                id={cast.id}
                                                name={cast.name}
                                                character={cast.character}
                                                profilePath={cast.profile_path}
                                            />
                                        }
                                    </SwiperSlide>
                                ))
                        }
                    </SliderShow>
                </div>
            </div>
            <div className='page-frame'>
                    {data?.also_known_as && isType
                        ? <TablePeopleActing
                            movieCredits={data?.movie_credits.cast}
                            tvCredits={data?.tv_credits.cast}
                        />
                        : data?.status &&
                        <>
                            <MovieMedia
                                dataMovie={data}
                                pict={data?.poster_path}
                            />
                            <MovieReviews
                                length={data?.reviews.results.length}
                                title={data?.title ? data?.title : data?.name}
                                reviews={data?.reviews.results}
                            />
                        </>
                    }
                </div>
        </div>
    );
};