import React from 'react';
import arrowDown from '../public/SVG/duble-arrow-down.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={arrowDown} alt="Scroll down" className="scroll"/>
            <div className="container">
                <div className="blurb">
                    <span className="title">Very latest</span>
                    <h1>Movie news</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;