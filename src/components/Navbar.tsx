import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logoIcon from "../public/SVG/Paulo F  I  L  M  S.svg";
import {navbarMenu} from "../mock/statick";
import {useAppSelector} from "../Store/store";


const Navbar: React.FC = () => {
    const {types} = useAppSelector(state => state.movies)

    const disabledClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, idx: number) => {
        if (idx === 1) {
            event
                .preventDefault()
        }
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
                    {/*<button>burger</button>*/}
                </div>
                <div className='navbar-panel'>
                    <ul>
                        {navbarMenu
                            .map((obj, index) => (
                                <li key={obj.title}>
                                    <NavLink
                                        onClick={event => disabledClick(event, index)}
                                        className={({isActive}) =>
                                            index === 1
                                                ? ''
                                                : isActive
                                                    ? 'active'
                                                    : ''
                                        }
                                        to={index === 1
                                            ? ''
                                            : obj.url}
                                    >
                                        {obj.title}
                                    </NavLink>
                                    {index === 1 &&
                                        <ul className='navbar-panel-popup'>
                                            <li>
                                                <Link to={`${obj.url}/${types[0]}`}>
                                                    {types[0]}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={`${obj.url}/${types[1]}`}>
                                                    {types[1]}
                                                </Link>
                                            </li>
                                        </ul>
                                    }
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;