import React, {FC} from 'react';
import {Navbar} from "../Navbar";
import './dropDownNavbar.scss'

type PropsType = {
    scroll: boolean
}
export const DropDownNavbar:FC<PropsType> = React.memo(({scroll}) => {

    return (
        <div
            style={{transform: scroll ? 'translateY(0px)' : ''}}
            className='drop_navbar'
        >
            <div className='container'>
                <Navbar/>
            </div>
        </div>
    );
});