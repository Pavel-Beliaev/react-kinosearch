import React from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import MovieCard from "../components/Cards/MovieCard";
import {useAppSelector} from "../Store/store";
import {useGetAllMoviesQuery} from "../Store/tmdbService/tmdb.api";

const AllMoviesPage:React.FC = () => {
    const {genres} = useAppSelector((state) => state.config)
    const {data: allMoviesDataList} = useGetAllMoviesQuery()

    console.log(allMoviesDataList?.results)

    return (
        <div className='frameworks-container movies'>
            <div className='movies-search'>
                <CustomInput placeholder='Type to search'/>
                <i className='fa fa-search'></i>
            </div>
            <div className='movies-colum'>
                {allMoviesDataList?.results.map((film) => (
                    <MovieCard
                        key={film.id}
                        title={film.title}
                        overview={film.overview}
                        poster={film.poster_path}
                        filmGenre={film.genre_ids}

                    />
                ))}
            </div>
            <div className='movies-sidebar'>
                <h4>Categories</h4>
                <ul>
                    {genres.map((genre) => (
                        <li key={genre.id}><a href="#">{genre.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AllMoviesPage;