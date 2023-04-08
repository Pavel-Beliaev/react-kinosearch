import React from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import Film from "../components/Film";

const AllMovies = () => {
    return (
        <div className='frameworks-container movies'>
            <div className='movies-search'>
                <CustomInput placeholder='Type to search'/>
                <i className='fa fa-search'></i>
            </div>
            <div className='movies-colum'>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
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