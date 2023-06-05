import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {SwiperSlide} from "swiper/react";
import PeopleCard from "../components/Cards/PeopleCard";
import SliderWrapper from "../components/SliderWrapper";
import MovieSlideCard from "../components/Cards/MovieSlideCard";
import MovieMedia from "../components/DetailsPage/MediaComponents/MovieMedia";
import MovieReviews from "../components/DetailsPage/MediaComponents/MovieReviews";
import TablePeopleActing from "../components/DetailsPage/TablePeopleActing/TablePeopleActing";
import SkeletonSliderShow from "../components/Skeletons/SkeletonSliderShow";
import SkeletonPeopleCard from "../components/Skeletons/SkeletonPeopleCard";
import {
    useGetAllMoviesQuery,
    useLazyGetDetailsQuery,
} from "../Store/tmdbService/endpoints";
import Sinopsis from "../components/DetailsPage/Sinopsis";

const DetailInfoPage = () => {
    const {id} = useParams()
    const {pathname} = useLocation()

    const [keyType, setKeyType] = useState(false)

    const pathnameType = pathname
        .split("/");
    const type = pathnameType.length > 3
        ? pathnameType[2]
        : pathnameType[1];

    const [fetchMovie, {data, isFetching: isFetchingDetails}] = useLazyGetDetailsQuery()
    const {data: dataAllMovies, isFetching} = useGetAllMoviesQuery({
        peopleId: data?.id,
        type: 'movie',
        typeQuery: 'discover',
    });


    useEffect(() => {
        window
            .scrollTo({
                top: 115,
                behavior: 'smooth'
            })
    }, [id])

    useEffect(() => {
        if (type === 'person') {
            setKeyType(true)
        } else setKeyType(false)
        fetchMovie({
            type: type,
            id: Number(id)
        })
    }, [id])


    return (
        <div className='page'>
            <div className='container'>
                <h2>Synopsis</h2>
                <Sinopsis
                    data={data}
                    keyType={keyType}
                    isFetching={isFetchingDetails}
                />
                <SliderWrapper
                    title={keyType
                        ? 'Known For'
                        : 'Top billed cast'
                    }
                    children={
                        keyType
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
                />
            </div>
            {data?.also_known_as && keyType
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
    );
};

export default DetailInfoPage;