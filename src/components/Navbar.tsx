import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logoIcon from "../public/SVG/Paulo F  I  L  M  S.svg";
import {navbarMenu} from "../mock/statick";
import {NavbarType} from "../@types/@types";

const Navbar:React.FC<NavbarType> = ({navbarRef}) => {

    return (
        <div className='container'>
            <div ref={navbarRef}
                 className='navbar-main'>
                <div className='navbar-logo'>
                    <Link to="/">
                        <img src={logoIcon} alt="logo"/>
                    </Link>
                    {/*<button>burger</button>*/}
                </div>
                <div className='navbar-panel'>
                    <ul>
                        {navbarMenu.map((obj) => (
                            <li
                                key={obj.title}
                            >
                                <NavLink
                                    className={({isActive}) => isActive ? 'active' : ''}
                                    to={obj.url}>
                                    {obj.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;