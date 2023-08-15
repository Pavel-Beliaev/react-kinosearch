import React, {FC} from 'react';
import {ErrorElement} from "../../components";
import './error.scss'

export const ErrorPage:FC = () => {
    console.log('error')

    return (
        <div className='error'>
            <ErrorElement/>
        </div>
    )
}