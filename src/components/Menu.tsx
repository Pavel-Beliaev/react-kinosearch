import React, {RefObject, useEffect, useState} from 'react';
import logoIcon from '../public/SVG/Paulo F  I  L  M  S.svg'
import {Link} from "react-router-dom";
import {navbarMenu} from "../mock/statick";
import Navbar from "./Navbar";

export type NavbarType = {
    navbarRef?: RefObject<HTMLDivElement>
}

const Menu: React.FC<NavbarType> = ({navbarRef}) => {


    return (
        <div className='navbar'>
            <div className='container'>
                <div className='tel'>
                    <Link to="tel: +66 65 335 62 63">
                        <i className='fa fa-phone'></i>
                        +66 65 335 62 63
                    </Link>
                </div>
            </div>
            <Navbar navbarRef={navbarRef}/>
        </div>
    );
};

export default Menu;