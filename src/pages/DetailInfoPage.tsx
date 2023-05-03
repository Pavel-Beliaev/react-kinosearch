import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useGetAllMoviesQuery, useGetAllPersonQuery, useGetDetailsMovieQuery} from "../Store/tmdbService/tmdb.api";
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
import PeopleActing from "../components/PeoplePageComponents/PeopleActing";

const DetailInfoPage = () => {
    const {id} = useParams()
    const {pathname} = useLocation()

    const movieID = pathname.includes('movies') && id
    const peopleID = pathname.includes('people') && id

    const {data: dataMovieDetails} = useGetDetailsMovieQuery(Number(movieID));
    const {data: dataPeopleDetails} = useGetAllPersonQuery(Number(peopleID))
    const {data: dataAllMovies} = useGetAllMoviesQuery({
        pageNumber: 1,
        peopleId: dataPeopleDetails?.id,
        type: 'discover'
    });
    const youtubeVideosKeys = dataMovieDetails?.videos.results.filter((el) => el.site === 'YouTube').map((elem) => elem.key)

    console.log(dataPeopleDetails)

    return (
        <div className='page'>
            <div className='container'>
                <h2>Synopsis</h2>
                <div className='page-synopsis'>
                    <div className='page-poster'>
                        {pathname.includes('movies')
                            ? <MoviePoster
                                poster={dataMovieDetails?.poster_path}
                                rating={dataMovieDetails?.vote_average}
                            />
                            : <PeoplePoster
                                poster={dataPeopleDetails?.profile_path}
                            />
                        }

                    </div>
                    <div className='page-overview'>
                        {pathname.includes('movies')
                            ? <MovieOverview
                                overview={dataMovieDetails?.overview}
                                title={'Overviews'}
                                creditsCrew={dataMovieDetails?.credits.crew}
                            />
                            : <PeopleBiography
                                title={'Biography'}
                                biography={dataPeopleDetails?.biography}
                            />
                        }
                    </div>
                    <div className='page-info'>
                        {pathname.includes('movies')
                            ? <MovieInfo
                                homepage={dataMovieDetails?.homepage}
                                twitterLink={dataMovieDetails?.external_ids.twitter_id}
                                facebookLink={dataMovieDetails?.external_ids.facebook_id}
                                status={dataMovieDetails?.status}
                                releaseDate={dataMovieDetails?.release_date}
                                revenue={dataMovieDetails?.revenue}
                                budget={dataMovieDetails?.budget}
                            />
                            : <PeopleInfo
                                title={'Personal Info'}
                                birthday={dataPeopleDetails?.birthday}
                                deathday={dataPeopleDetails?.deathday}
                                placeOfBirth={dataPeopleDetails?.place_of_birth}
                                gender={dataPeopleDetails?.gender}
                                knownFor={dataPeopleDetails?.known_for_department}
                                facebookLink={dataPeopleDetails?.external_ids.facebook_id}
                                twitterLink={dataPeopleDetails?.external_ids.twitter_id}
                            />
                        }


                    </div>
                </div>
                    {pathname.includes('movies')
                        ? <SliderWrapper
                            title={'Top billed cast'}
                            children={dataMovieDetails?.credits.cast.map((cast) => (
                                <SwiperSlide key={cast.id}>
                                    <PeopleCard
                                        id={cast.id}
                                        name={cast.name}
                                        character={cast.character}
                                        profilePath={cast.profile_path}
                                    />
                                </SwiperSlide>
                            ))}
                        />
                        : <SliderWrapper
                            title={'Known For'}
                            children={dataAllMovies?.results.map((film) => (
                                <SwiperSlide key={film.id}>
                                    <MovieSlideCard
                                        title={film.title}
                                        rating={film.vote_average}
                                        poster={film.poster_path}
                                        id={film.id}
                                    />
                                </SwiperSlide>
                            ))}
                        />}
            </div>
            {pathname.includes('movies')
                ? <>
                    <MovieMedia
                        youtubeVideosKeys={youtubeVideosKeys}
                        dataMovie={dataMovieDetails}
                    />
                    <MovieReviews
                        length={dataMovieDetails?.reviews.results.length}
                        title={dataMovieDetails?.title}
                        reviews={dataMovieDetails?.reviews.results}
                    />
                </>
                : <PeopleActing/>
            }
        </div>
    );
};

export default DetailInfoPage;