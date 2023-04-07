import React from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import Film from "../components/Film";

const AllMovies = () => {
    return (
        <div className='frameworks-container movies'>
            <div className='movies-search'>
                <CustomInput/>
            </div>
            <div className='movies-colum'>
                <Film/>
            </div>
            <div className='movies-sidebar'>
                <h4>Categories</h4>
                <ul>
                    <li>horror</li>
                </ul>
            </div>
        </div>
    );
};

export default AllMovies;