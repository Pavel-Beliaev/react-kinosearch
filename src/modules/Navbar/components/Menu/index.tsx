import React, {FC} from 'react';
import {Navbar} from "../Navbar";
import {Telephone} from "../Telephone";

export const Menu:FC = () => {
    return (
        <div className='menu'>
            <Telephone/>
            <Navbar/>
        </div>
    );
};