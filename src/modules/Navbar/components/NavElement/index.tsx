import React, {FC} from 'react';
import {Link, NavLink} from "react-router-dom";
import {menuNavbar, navbarMenu} from "../../mock/static";
import '../Navbar/navbar.scss'

export const NavElement: FC = () => {
    const disabledClick = (event: React.MouseEvent<HTMLAnchorElement>, idx: number) => {
        if (idx === 1) {
            event.preventDefault()
        }
    }

    return (
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
                            <ul className='popup'>
                                <li>
                                    <Link to={`${obj.url}/${menuNavbar[0]}`}>
                                        {menuNavbar[0]}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`${obj.url}/${menuNavbar[1]}`}>
                                        {menuNavbar[1]}
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                ))
            }
        </ul>
    );
};