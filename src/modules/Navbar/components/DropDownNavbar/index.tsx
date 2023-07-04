import React, {FC} from 'react';
import {Navbar} from "../Navbar";

type DropDownNavbarType = {
    scroll: number
}
export const DropDownNavbar:FC<DropDownNavbarType> = ({scroll}) => {
    return (
        <div
            style={{transform: scroll < 100 ? '' :  'translateY(0px)'}}
            className='drop_navbar'
        >
            <Navbar/>
        </div>
    );
};