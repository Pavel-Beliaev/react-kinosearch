import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {navbarMenu} from "../../mock/static";
import '../Navbar/navbar.scss'
import {DropDownGenres} from "../DropDownGenres";
import {useAppSelector} from "../../../../Store/store";

export const NavElement: FC = () => {
    const {genresMovies, genresTV} = useAppSelector((state) => state.config);

    return (
        <ul>
            {navbarMenu
                .map((obj, index) => (
                    <li key={obj.title}>
                        <NavLink
                            className={({isActive}) =>
                                isActive
                                    ? 'active'
                                    : ''
                            }
                            to={obj.url}
                        >
                            {obj.title}
                            {(index === 1 || index === 2) &&
                                <DropDownGenres
                                    genres={index === 1 ? genresMovies : genresTV}
                                    type={index === 1 ? 'movie' : 'tv'}
                                />
                            }
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
};