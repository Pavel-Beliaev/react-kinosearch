import React, {FC} from 'react';

export const ErrorPage:FC = () => {

    return (
        <div className='error'>
            <div className='error-block'>
                <h3>Error</h3>
                <p>Not Found</p>
            </div>
        </div>
    );
};