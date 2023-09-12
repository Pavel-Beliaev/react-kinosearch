import React, {FC, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {menuNavbar, navbarMenu} from "../../mock/static";
import '../Navbar/navbar.scss'

export const NavElement: FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
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
                            style={{color: index === 1 && isHovered ? '#FBBD61FF' : ''}}
                            onClick={event => disabledClick(event, index)}
                            className={({isActive}) =>
                                isActive
                                    ? 'active'
                                    : ''
                            }
                            to={obj.url}
                        >
                            {obj.title}
                        </NavLink>
                        {index === 1 &&
                            <ul
                                className='popup'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
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