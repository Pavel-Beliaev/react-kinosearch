import React, {FC} from 'react';
import {ErrorElement} from "../../components";
import './error.scss'

export const ErrorPage:FC = () => {

    return (
        <div className='frameworks-container error'>
            <ErrorElement>
                <h3>Error</h3>
                <p>Page not found</p>
            </ErrorElement>
        </div>
    )
}