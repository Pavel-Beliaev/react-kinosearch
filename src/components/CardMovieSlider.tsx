import React from 'react';
import notPicture from '../public/PNG/placeholder.png'
import {Link} from "react-router-dom";


const CardMovieSlider = () => {
    return (
        <div className='newfilms'>
            <div className='newfilms-poster'>
                <div className='newfilms-aside'>
                    <div className='newfilms-text'>
                        <Link className='newfilms-play'
                            to='#'>
                            <i className='fa fa-play'></i>
                        </Link>
                        <Link className='newfilms-readmore'
                            to='#'>
                            Read more
                        </Link>
                        <span>Released: 1993-03-15</span>
                    </div>
                </div>
                <img src={notPicture} alt="poster"/>
            </div>
            <h4>title</h4>
            <div className='newfilms-more'>
                <span className='newfilms-certificate'>
                    18
                </span>
                <span className='newfilms-rating'>
                    7.3
                </span>
            </div>
        </div>
    );
};

export default CardMovieSlider;