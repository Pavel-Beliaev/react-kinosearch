import React, {FC} from 'react';
import {Navbar} from "../Navbar";
import './dropDownNavbar.scss'

type DropDownNavbarType = {
    scroll: boolean
}
export const DropDownNavbar:FC<DropDownNavbarType> = ({scroll}) => {
    return (
        <div
            style={{transform: scroll ? 'translateY(0px)' : ''}}
            className='drop_navbar'
        >
            <Navbar/>
        </div>
    );
};