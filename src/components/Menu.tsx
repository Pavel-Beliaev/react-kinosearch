import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import {NavbarType} from "../@types/@types";

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