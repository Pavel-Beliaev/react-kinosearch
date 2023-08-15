import React, {FC} from 'react';
import {MovieContent} from "../../modules";
import './allMoviesPage.scss'

export const AllMoviesPage: FC = () => {
    console.log('allMovies')

    return (
        <div className="frameworks">
            <div className='frameworks-container movies'>
                <MovieContent/>
            </div>
        </div>
    );
};