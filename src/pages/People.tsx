import React from 'react';
import notPicture from '../public/PNG/placeholder.png'


const People = () => {
    return (
        <div className='frameworks-container people'>
            <h2>Popular People</h2>
            <div className='people-content'>
                <div className='people-item'>
                    <img src={notPicture} alt="people"/>
                    <div className='people-text'>
                        <h4>Name</h4>
                        <p>role role role role role role role role role role role role role role role role role role</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;