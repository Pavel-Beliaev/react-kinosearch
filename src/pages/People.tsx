import React from 'react';
import PeopleCard from "../components/PeopleCard";


const People = () => {
    return (
        <div className='frameworks-container people'>
            <h2>Popular People</h2>
            <div className='people-content'>
                <PeopleCard/>
            </div>
        </div>
    );
};

export default People;