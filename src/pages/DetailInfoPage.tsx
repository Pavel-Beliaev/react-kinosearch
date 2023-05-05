import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {
    useGetAllMoviesQuery,
    useGetAllPersonQuery,
    useGetDetailsMovieQuery,
    useGetDetailsTvQuery
} from "../Store/tmdbService/tmdb.api";
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
import TablePeopleActing from "../components/PeoplePageComponents/TablePeopleActing";
import SkeletonSliderShow from "../components/Skeletons/SkeletonSliderShow";
import SkeletonPeopleCard from "../components/Skeletons/SkeletonPeopleCard";
import SkeletonMoviePage from "../components/Skeletons/SkeletonMoviePage";
import SkeletonPeoplePage from "../components/Skeletons/SkeletonPeoplePage";

const DetailInfoPage = () => {
    const {id} = useParams()
    const {pathname} = useLocation()

    const movieID = pathname.includes('movies') && id
    const tvID = pathname.includes('tv') && id
    const peopleID = pathname.includes('people') && id

    const {data: dataTvDetails, isFetching: isFetchingTvDetails} = useGetDetailsTvQuery(Number(tvID));
    const {data: dataMovieDetails, isFetching: isFetchingMovieDetails} = useGetDetailsMovieQuery(Number(movieID));
    const {data: dataPeopleDetails, isFetching: isFetchingPeopleDetails} = useGetAllPersonQuery(Number(peopleID))
    const {data: dataAllMovies, isFetching} = useGetAllMoviesQuery({
        pageNumber: 1,
        peopleId: dataPeopleDetails?.id,
        type: 'discover'
    });
    const youtubeMoviesKeys = dataMovieDetails?.videos.results.filter((el) => el.site === 'YouTube').map((elem) => elem.key)
    const youtubeTvKeys = dataTvDetails?.videos.results.filter((el) => el.site === 'YouTube').map((elem) => elem.key)

    console.log(dataTvDetails)

    return (
        <div className='page'>
            <div className='container'>
                <h2>Synopsis</h2>
                <div className='page-synopsis'>
                    {pathname.includes('movies')
                        ? isFetchingMovieDetails
                            ? <SkeletonMoviePage/>
                            : <>
                                <div className='page-poster'>
                                    <MoviePoster
                                        poster={dataMovieDetails?.poster_path}
                                        rating={dataMovieDetails?.vote_average}
                                    />
                                </div>
                                <div className='page-overview'>
                                    <MovieOverview
                                        overview={dataMovieDetails?.overview}
                                        title={'Overviews'}
                                        creditsCrew={dataMovieDetails?.credits.crew}
                                    />
                                </div>
                                <div className='page-info'>
                                    <MovieInfo
                                        homepage={dataMovieDetails?.homepage}
                                        twitterLink={dataMovieDetails?.external_ids.twitter_id}
                                        facebookLink={dataMovieDetails?.external_ids.facebook_id}
                                        status={dataMovieDetails?.status}
                                        releaseDate={dataMovieDetails?.release_date}
                                        revenue={dataMovieDetails?.revenue}
                                        budget={dataMovieDetails?.budget}
                                    />
                                </div>
                            </>
                        : pathname.includes('tv')
                            ? isFetchingTvDetails
                                ? <SkeletonMoviePage/>
                                : <>
                                    <div className='page-poster'>
                                        <MoviePoster
                                            poster={dataTvDetails?.poster_path}
                                            rating={dataTvDetails?.vote_average}
                                        />
                                    </div>
                                    <div className='page-overview'>
                                        <MovieOverview
                                            overview={dataTvDetails?.overview}
                                            title={'Overviews'}
                                            created_by={dataTvDetails?.created_by}
                                        />
                                    </div>
                                    <div className='page-info'>
                                        <MovieInfo
                                            homepage={dataTvDetails?.homepage}
                                            twitterLink={dataTvDetails?.external_ids.twitter_id}
                                            facebookLink={dataTvDetails?.external_ids.facebook_id}
                                            status={dataTvDetails?.status}
                                            releaseDate={dataTvDetails?.first_air_date}
                                            end_date={dataTvDetails?.last_air_date}
                                            number_of_seasons={dataTvDetails?.number_of_seasons}
                                            number_of_episodes={dataTvDetails?.number_of_episodes}
                                        />
                                    </div>
                                </>
                            : isFetchingPeopleDetails
                                ? <SkeletonPeoplePage/>
                                : <>
                                    <div className='page-poster'>
                                        <PeoplePoster
                                            poster={dataPeopleDetails?.profile_path}
                                        />
                                    </div>
                                    <div className='page-overview'>
                                        <PeopleBiography
                                            title={'Biography'}
                                            biography={dataPeopleDetails?.biography}
                                        />
                                    </div>
                                    <div className='page-info'>
                                        <PeopleInfo
                                            title={'Personal Info'}
                                            birthday={dataPeopleDetails?.birthday}
                                            deathday={dataPeopleDetails?.deathday}
                                            placeOfBirth={dataPeopleDetails?.place_of_birth}
                                            gender={dataPeopleDetails?.gender}
                                            knownFor={dataPeopleDetails?.known_for_department}
                                            facebookLink={dataPeopleDetails?.external_ids.facebook_id}
                                            twitterLink={dataPeopleDetails?.external_ids.twitter_id}
                                        />
                                    </div>
                                </>
                    }
                </div>
                {pathname.includes('movies')
                    ? <SliderWrapper
                        title={'Top billed cast'}
                        children={dataMovieDetails?.credits.cast.map((cast) => (
                            <SwiperSlide key={cast.credit_id}>
                                {isFetchingMovieDetails
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
                    : pathname.includes('tv')
                        ? <SliderWrapper
                            title={'Top billed cast'}
                            children={dataTvDetails?.credits.cast.map((cast) => (
                                <SwiperSlide key={cast.credit_id}>
                                    {isFetchingMovieDetails
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
                        : <SliderWrapper
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
                        />}
            </div>
            {pathname.includes('movies')
                ? <>
                    <MovieMedia
                        youtubeVideosKeys={youtubeMoviesKeys}
                        dataMovie={dataMovieDetails}
                    />
                    <MovieReviews
                        length={dataMovieDetails?.reviews.results.length}
                        title={dataMovieDetails?.title}
                        reviews={dataMovieDetails?.reviews.results}
                    />
                </>
                : pathname.includes('tv')
                    ? <>
                        <MovieMedia
                            youtubeVideosKeys={youtubeTvKeys}
                            dataMovie={dataTvDetails}
                        />
                        <MovieReviews
                            length={dataTvDetails?.reviews.results.length}
                            title={dataTvDetails?.name}
                            reviews={dataTvDetails?.reviews.results}
                        />
                    </>
                    : <TablePeopleActing
                        movieCredits={dataPeopleDetails?.movie_credits.cast}
                        tvCredits={dataPeopleDetails?.tv_credits.cast}
                    />
            }
        </div>
    );
};

export default DetailInfoPage;