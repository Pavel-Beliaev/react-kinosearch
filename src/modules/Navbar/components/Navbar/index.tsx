import React, {FC} from 'react';
import {Link} from "react-router-dom";
import logoIcon from "../../assets/SVG/Paulo F  I  L  M  S.svg";
import './navbar.scss'
import {Panel} from "../Panel";
import {Burger} from "../Burger";

export const Navbar: FC = () => {

    return (
        <div className='navbar'>
            <Link to="/">
                <img
                    src={logoIcon}
                    alt="logo"
                />
            </Link>
            <Burger/>
            <Panel/>
        </div>
    );
};