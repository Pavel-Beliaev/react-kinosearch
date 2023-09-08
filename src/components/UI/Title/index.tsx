import React, {FC} from 'react';
import './title.scss'

type TitleType = {
    children: string
}

export const Title: FC<TitleType> = ({children}) => {
    return (
        <div className='titles'>
            <h2>
                {children}
            </h2>
        </div>

    );
};

