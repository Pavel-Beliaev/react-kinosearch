import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import MovieInfo from "../components/MoviePageComponents/MovieInfo";
import PeopleInfo from "../components/PeoplePageComponents/PeopleInfo";
import MovieOverview from "../components/MoviePageComponents/MovieOverview";
import PeopleBiography from "../components/PeoplePageComponents/PeopleBiography";
import MoviePoster from "../components/MoviePageComponents/MoviePoster";
import PeoplePoster from "../components/PeoplePageComponents/PeoplePoster";
import {SwiperSlide} from "swiper/react";
import PeopleCard from "../components/Cards/PeopleCard";
import SliderWrapper from "../components/SliderWrapper";
import MovieSlideCard from "../components/Cards/MovieSlideCard";
import MovieMedia from "../components/MoviePageComponents/MovieMedia";
import MovieReviews from "../components/MoviePageComponents/MovieReviews";
import TablePeopleActing from "../components/PeoplePageComponents/TablePeopleActing/TablePeopleActing";
import SkeletonSliderShow from "../components/Skeletons/SkeletonSliderShow";
import SkeletonPeopleCard from "../components/Skeletons/SkeletonPeopleCard";
import SkeletonMoviePage from "../components/Skeletons/SkeletonMoviePage";
import SkeletonPeoplePage from "../components/Skeletons/SkeletonPeoplePage";
import {
    useGetAllMoviesQuery,
    useLazyGetDetailsQuery,
} from "../Store/tmdbService/endpoints";

const DetailInfoPage = () => {
    const {id} = useParams()
    const {pathname} = useLocation()

    const pathnameType = pathname.split("/");
    const type = pathnameType.length > 3 ? pathnameType[2] : pathnameType[1];

    const [fetchMovie, {data, isFetching: isFetchingDetails}] = useLazyGetDetailsQuery()


    const {data: dataAllMovies, isFetching} = useGetAllMoviesQuery({
        peopleId: data?.id,
        type: 'movie',
        typeQuery: 'discover',
    });


    useEffect(() => {
        window.scrollTo({
            top: 115,
            behavior: 'smooth'
        })
    }, [id])

    useEffect(() => {
        fetchMovie({
            type: type,
            id: Number(id)
        })
    }, [id])

    console.log('data person', data)


    return (
        <div className='page'>
            <div className='container'>
                <h2>Synopsis</h2>
                <div className='page-synopsis'>
                    {pathname.includes('person')
                        ? isFetchingDetails
                            ? <SkeletonPeoplePage/>
                            : <>
                                <div className='page-poster'>
                                    <PeoplePoster
                                        poster={data?.profile_path}
                                    />
                                </div>
                                <div className='page-overview'>
                                    <PeopleBiography
                                        title={'Biography'}
                                        biography={data?.biography}
                                    />
                                </div>
                                <div className='page-info'>
                                    <PeopleInfo
                                        title={'Personal Info'}
                                        birthday={data?.birthday}
                                        deathday={data?.deathday}
                                        placeOfBirth={data?.place_of_birth}
                                        gender={data?.gender}
                                        knownFor={data?.known_for_department}
                                        facebookLink={data?.external_ids.facebook_id}
                                        twitterLink={data?.external_ids.twitter_id}
                                    />
                                </div>
                            </>
                        : isFetchingDetails
                            ? <SkeletonMoviePage/>
                            : <>
                                <div className='page-poster'>
                                    <MoviePoster
                                        poster={data?.poster_path}
                                        rating={data?.vote_average}
                                    />
                                </div>
                                <div className='page-overview'>
                                    <MovieOverview
                                        overview={data?.overview}
                                        title={'Overviews'}
                                        creditsCrew={data?.credits.crew}
                                        created_by={data?.created_by}
                                    />
                                </div>
                                <div className='page-info'>
                                    <MovieInfo
                                        homepage={data?.homepage}
                                        twitterLink={data?.external_ids.twitter_id}
                                        facebookLink={data?.external_ids.facebook_id}
                                        status={data?.status}
                                        releaseDate={data?.release_date ? data?.release_date : data?.first_air_date}
                                        end_date={data?.last_air_date}
                                        revenue={data?.revenue}
                                        budget={data?.budget}
                                        number_of_seasons={data?.number_of_seasons}
                                        number_of_episodes={data?.number_of_episodes}
                                    />
                                </div>
                            </>
                    }
                </div>
                {pathname.includes('person')
                    ? <SliderWrapper
                        title={'Known For'}
                        children={dataAllMovies?.results.map((film) => (
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
                        ))}
                    />
                    : <SliderWrapper
                        title={'Top billed cast'}
                        children={data?.credits.cast.map((cast) => (
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
                        ))}
                    />
                }
            </div>
            {data?.also_known_as && pathname.includes('person')
                ? <TablePeopleActing
                    movieCredits={data?.movie_credits.cast}
                    tvCredits={data?.tv_credits.cast}
                />
                : data?.budget &&
                <>
                    <MovieMedia
                        dataMovie={data}
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