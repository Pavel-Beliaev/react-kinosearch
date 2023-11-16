import React, {FC, useCallback, useEffect, useState} from 'react';
import './burger.scss'
import {ReactComponent as BurgerIcon} from "../../assets/SVG/burger.svg";
import {NavElement} from "../NavElement";
import {useLocation} from "react-router-dom";


export const Burger: FC = () => {
    const {pathname} = useLocation();
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (isActive && event.target instanceof Element) {
                const targetElement = event.target as Element;

                if (!targetElement.closest('.burger')) {
                    setIsActive(false);
                }
            }
        },
        [isActive]
    );

    useEffect(() => {
        setIsActive(false);
    }, [pathname])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);
    const burgerMenu = (): void => {
        setIsActive(!isActive)
    }

    return (
        <div className='burger'>
            <BurgerIcon onClick={burgerMenu}/>
            {isActive &&
                <NavElement/>
            }
        </div>
    );
};