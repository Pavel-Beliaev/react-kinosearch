import React, {FC} from 'react';
import './title.scss'

type TitleType = {
    children: string
}

const Title:FC<TitleType> = ({children}) => {
    return (
        <h2>
            {children}
        </h2>

    );
};

export default Title;