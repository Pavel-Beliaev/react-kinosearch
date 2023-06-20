import React, {FC} from 'react';
import './loader.scss'

export const Loader:FC = () => {

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