import React from 'react';
import './loader.scss'

const Loader: React.FC = () => {

    return (
        <div className='loader'>
            <div className='loader-primary'></div>
            <div className='loader-primary-slice'></div>
            <div className='loader-middle-slice'></div>
            <div className='loader-core'></div>
            <div className='loader-core-slice'></div>
        </div>
    );
};

export default Loader;