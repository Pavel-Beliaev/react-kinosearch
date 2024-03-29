import React, {FC, useEffect} from 'react';
import {SwiperSlide} from "swiper/react";
import {
    useGetAllMoviesQuery,
    useLazyGetDetailsQuery,
} from "../../Store/tmdbService/endpoints";
import {useScroll} from "../../hooks/useScroll";
import {useTypePage} from "../../hooks/useTypePage";
import {
    MovieSlideCard,
    PeopleCard,
    SkeletonPeopleCard, SkeletonSliderShow,
    SliderShow,
    Title
} from "../../components";
import {MovieMedia, MovieReviews, Synopsis, TablePeopleActing} from "../../modules";
import {useScreenSize} from "../../hooks/useScreenSize";

export const DetailInfoPage: FC = () => {
    const {isType, type, id} = useTypePage()
    const scrollTo = useScroll()
    const screenSize = useScreenSize({
        size_1: 1024,
        value_1: 4,
        size_2: 768,
        value_2: 3,
        size_3: 470,
        value_3: 2,
        value_4: 1,
    });

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
        <div className="frameworks">
            <div className='page-frame'>
                <div className='frameworks-container'>
                    <Title>Synopsis</Title>
                    {data &&
                        <Synopsis
                            data={data}
                            isFetching={isFetchingDetails}
                            isType={isType}
                        />
                    }
                </div>
            </div>
            <div className='page-frame'>
                <div className='frameworks-container'>
                    <Title>{isType ? 'Known For' : 'Top billed cast'}</Title>
                    <SliderShow slideCount={screenSize}>
                        {isType
                            ? dataAllMovies?.results
                                .map((film) => (film.poster_path &&
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
                                .map((cast) => (cast.profile_path &&
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
            {data?.also_known_as && isType
                ? <div className='page-frame'>
                    <TablePeopleActing
                        movieCredits={data?.movie_credits.cast}
                        tvCredits={data?.tv_credits.cast}
                    />
                </div>
                : data?.status &&
                <>
                    <div className='page-frame'>
                        <MovieMedia
                            dataMovie={data}
                            pict={data?.poster_path}
                        />
                    </div>
                    <div className='page-frame'>
                        <MovieReviews
                            length={data?.reviews.results.length}
                            title={data?.title ? data?.title : data?.name}
                            reviews={data?.reviews.results}
                        />
                    </div>
                </>
            }
        </div>
    );
};