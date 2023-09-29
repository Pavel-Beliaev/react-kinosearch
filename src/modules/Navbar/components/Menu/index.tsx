import React, {FC} from 'react';
import {Navbar} from "../Navbar";
import {Telephone} from "../Telephone";
import './_menu.scss'

type PropsType = {
    refElem: React.RefObject<HTMLDivElement>
}
export const Menu: FC<PropsType> = React.memo(({refElem}) => {

    return (
        <div
            ref={refElem}
            className='container menu'
        >
            <Telephone/>
            <Navbar/>
        </div>
    );
});