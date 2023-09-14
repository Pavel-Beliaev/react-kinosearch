import React, {FC} from 'react';
import './errorSearch.scss'

type PropsType = {
    value: string
}
export const ErrorSearch:FC<PropsType> = ({value}) => {
    return (
        <div className='errorSearch'>
            <p>Your search - <span>{value}</span> - did not find anything.</p>
            <h3>Suggestions:</h3>
            <ul>
                <li>Make sure that all words are spelled correctly.</li>
                <li>Try different keywords.</li>
                <li>Try more general keywords.</li>
            </ul>
        </div>
    );
};