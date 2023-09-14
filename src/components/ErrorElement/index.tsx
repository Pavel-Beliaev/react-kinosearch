import React, {FC} from 'react';
import './errorElement.scss'

type PropsType = {
    children: React.ReactNode
}

export const ErrorElement:FC<PropsType> = ({children}) => {

    return (
        <div className='err-block'>
            {children}
        </div>
    );
};