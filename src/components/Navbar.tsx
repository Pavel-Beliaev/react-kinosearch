import React, {useState} from 'react';
import logoIcon from '../public/SVG/Paulo F  I  L  M  S.svg'
import {Link} from "react-router-dom";

const navbarMenu = [
    {title: 'Home', url: '/'},
    {title: 'All movies', url: '/movies'},
    {title: 'News', url: '/news'},
    {title: 'Contact us', url: '/contact'},
]

const Navbar = () => {
    const [isActive, setIsActive] = useState(0)
    const onChangeMenu = (idx: number) => {
        setIsActive(idx)
    }
    return (
        <div className='navbar'>
            <div className='heading'>
                <div className='container'>
                    <div className='tel'>
                        <a href="tel: 123456789">
                            <i className='fa fa-phone'></i>
                            123 456 789
                        </a>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='navbar-main'>
                    <div className='navbar-logo'>
                        <Link to="/">
                            <img src={logoIcon} alt="logo"/>
                        </Link>
                        {/*<button>burger</button>*/}
                    </div>
                    <div className='navbar-panel'>
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

export default Navbar;