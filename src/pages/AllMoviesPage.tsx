import React from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import MovieCard from "../components/Cards/MovieCard";
import {useAppSelector} from "../Store/store";

const AllMoviesPage = () => {
    const {genres} = useAppSelector((state) => state.config)

    return (
        <div className='frameworks-container movies'>
            <div className='movies-search'>
                <CustomInput placeholder='Type to search'/>
                <i className='fa fa-search'></i>
            </div>
            <div className='movies-colum'>
                <MovieCard/>
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