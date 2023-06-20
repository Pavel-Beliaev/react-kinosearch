import React, {FC} from 'react';
import {navbarMenu} from "../../mock/statick";
import {Link, NavLink} from "react-router-dom";
import {useAppSelector} from "../../Store/store";

export const NavElement:FC = () => {
    const {types} = useAppSelector(state => state.movies)

    const disabledClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, idx: number) => {
        if (idx === 1) {
            event
                .preventDefault()
        }
    }

    return (
        <>
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
        </>
    );
};