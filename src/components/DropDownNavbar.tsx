import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logoIcon from "../public/SVG/Paulo F  I  L  M  S.svg";
import {navbarMenu} from "../mock/statick";

export type DropDownNavbarType = {
    isVisible: boolean
}
const DropDownNavbar: React.FC<DropDownNavbarType> = ({isVisible}) => {
    const [isActive, setIsActive] = useState(0)
    const onChangeMenu = (idx: number) => {
        setIsActive(idx)
    }

    return (
        <div style={isVisible ? {transform: 'translateX(0px)'} : {}}
             className='drop_navbar'>
            <div className='container'>
                <div className='drop_navbar-main'>
                    <div className='drop_navbar-logo'>
                        <Link to="/">
                            <img src={logoIcon} alt="logo"/>
                        </Link>
                    </div>
                    <div className='drop_navbar-panel'>
                        <ul>
                            {navbarMenu.map((obj, index) => (
                                <li
                                    key={obj.title}
                                    onClick={() => onChangeMenu(index)}
                                    className={isActive === index ? 'active' : ''}>
                                    <Link to={obj.url}>{obj.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownNavbar;