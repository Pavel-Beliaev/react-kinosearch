import React from 'react';
import notPicture from "../public/PNG/placeholder.png";

const PeopleCard = () => {
    return (
        <div className='peopleCard'>
            <img
                src={notPicture}
                alt="people"
            />
            <div className='peopleCard-text'>
                <h4>Name</h4>
                <p> role role role role role role role</p>
            </div>
        </div>
    );
};

export default PeopleCard;