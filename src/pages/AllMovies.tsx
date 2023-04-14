import React from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import CardMovie from "../components/CardMovie";
import {useGetAllGenresQuery, useGetAllMoviesQuery, useSearchMoviesQuery} from "../Store/TMDB/tmdb.api";

const AllMovies = () => {
    // const {data} = useSearchMoviesQuery('Avatar') //for search
    // const {data} = useGetAllMoviesQuery(1) // all movies (pages)
    // const {data} = useGetAllGenresQuery('en-US') // all genre




    return (
        <div className='frameworks-container movies'>
            <div className='movies-search'>
                <CustomInput placeholder='Type to search'/>
                <i className='fa fa-search'></i>
            </div>
            <div className='movies-colum'>
                <CardMovie/>
                <CardMovie/>
                <CardMovie/>
                <CardMovie/>
            </div>
            <div className='movies-sidebar'>
                <h4>Categories</h4>
                <ul>
                    <li><a href="#">horror</a></li>
                    <li><a href="#">horror</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AllMovies;