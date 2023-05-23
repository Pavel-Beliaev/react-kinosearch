import React from 'react';
import Navbar from "./Navbar";
import {DropDownNavbarType} from "../@types/@types";

const DropDownNavbar: React.FC<DropDownNavbarType> = ({scroll}) => {

    return (
        <div style={scroll < 115 ? {} : {transform: 'translateX(0px)'}}
             className='drop_navbar'>
           <Navbar/>
        </div>
    );
};

export default DropDownNavbar;