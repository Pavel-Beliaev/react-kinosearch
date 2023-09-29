import React, {FC} from 'react';
import './title.scss'

type PropsType = {
    children: string
}

export const Title: FC<PropsType> = ({children}) => {
    return (
        <div className='titles'>
            <h2>
                {children}
            </h2>
        </div>

    );
};

