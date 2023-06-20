import React from 'react';
import {Navbar} from "./Navbar";

type DropDownNavbarType = {
    scroll: number
}

export const DropDownNavbar: React.FC<DropDownNavbarType> = ({scroll}) => {

    return (
        <div
            style={scroll < 115
                ? {}
                : {transform: 'translateY(0px)'}
            }
            className='drop_navbar'
        >
            <Navbar/>
        </div>
    );
};