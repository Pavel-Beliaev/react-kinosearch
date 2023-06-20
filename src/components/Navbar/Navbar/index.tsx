import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import logoIcon from "../../../public/SVG/Paulo F  I  L  M  S.svg";
import {ReactComponent as BurgerIcon} from "../../../public/SVG/burger.svg";
import {NavElement} from "../NavElement";


export const Navbar:FC = () => {
    const [isActive, setIsActive] = useState(false)


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
                    <BurgerIcon onClick={() => setIsActive(!isActive)}/>
                    {isActive &&
                        <ul>
                            <NavElement/>
                        </ul>
                    }
                </div>
                <div className='navbar-panel'>
                    <ul>
                        <NavElement/>
                    </ul>
                </div>

            </div>
        </div>
    );
};