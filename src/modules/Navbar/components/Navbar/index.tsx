import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import logoIcon from "../../assets/SVG/Paulo F  I  L  M  S.svg";
import {ReactComponent as BurgerIcon} from "../../assets/SVG/burger.svg";
import {NavElement} from "../NavElement";
import './navbar.scss'

export const Navbar:FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const burgerMenu = (): void => {
        setIsActive(!isActive)
    }

    return (
        <div className='container navbar'>
            <div className='navbar-main'>
                <div>
                    <Link to="/">
                        <img
                            src={logoIcon}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className='navbar-burger'>
                    <BurgerIcon onClick={burgerMenu}/>
                    {isActive &&
                        <NavElement/>
                    }
                </div>
                <div className='navbar-panel'>
                    <NavElement/>
                </div>
            </div>
        </div>
    );
};