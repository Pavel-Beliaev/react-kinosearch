import React from 'react';
import Navbar from "./Navbar";
import {DropDownNavbarType} from "../@types/@types";

const DropDownNavbar: React.FC<DropDownNavbarType> = ({isVisible}) => {

    return (
        <div style={isVisible ? {transform: 'translateX(0px)'} : {}}
             className='drop_navbar'>
           <Navbar/>
        </div>
    );
};

export default DropDownNavbar;