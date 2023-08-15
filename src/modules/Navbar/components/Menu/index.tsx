import React, {FC} from 'react';
import {Navbar} from "../Navbar";
import {Telephone} from "../Telephone";
import './_menu.scss'

type MenuType = {
    refElem: React.RefObject<HTMLDivElement>
}
export const Menu: FC<MenuType> = ({refElem}) => {

    return (
        <div
            ref={refElem}
            className='menu'
        >
            <Telephone/>
            <Navbar/>
        </div>
    );
};