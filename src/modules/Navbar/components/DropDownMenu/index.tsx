import React, {FC} from 'react';
import {Navbar} from "../Navbar";
import './dropDownMenu.scss'

type PropsType = {
    scroll: boolean
}
export const DropDownMenu:FC<PropsType> = React.memo(({scroll}) => {

    return (
        <div
            style={{transform: scroll ? 'translateY(0px)' : ''}}
            className='drop_menu'
        >
            <div className='container'>
                <Navbar/>
            </div>
        </div>
    );
});