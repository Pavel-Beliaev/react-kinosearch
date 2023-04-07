import React from 'react';

const Film = () => {
    return (
        <div className='film'>
            <img src="" alt="Prev. poster"/>
            <div className='film-info'>
                <span>genres</span>
                <h3>name</h3>
                <p>short description</p>
                <div className='film-more'>
                    <p><a href="#">film page</a></p>
                    <span>time</span>
                </div>
            </div>
        </div>
    );
};

export default Film;