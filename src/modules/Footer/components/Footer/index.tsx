import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {footerContactArray, footerLinkArray, footerMenu} from "../../mock/statick";
import './footer.scss'
import {ReactComponent as Logo} from "./../../assets/SVG/TMDB.svg";

export const Footer: FC = () => {
    const [isOpen, setIsOpen] = useState<{active: boolean, idx: number | null}>({active: false, idx: null})

    const menuToggle = (idx: number) => {
        setIsOpen({active: !isOpen.active, idx: idx})
    }

    return (
        <div className='footer'>
            <div className='frameworks-container'>
                <div className='footer-main'>
                    <div className='footer-row'>
                        {footerMenu
                            .map((value, index) => (
                                <div
                                    key={value}
                                    className='footer-column'
                                >
                                    <h6 onClick={() => menuToggle(index)}>
                                        {value}
                                    </h6>
                                    <div className={isOpen.active && isOpen.idx === index ? 'footer-column-menu open' : 'footer-column-menu'}>
                                        <ul>
                                            {footerLinkArray
                                                .map((text) => (
                                                    <li key={text}>
                                                        <Link to="/">
                                                            {text}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className='footer-column-border'/>

                                </div>
                            ))
                        }
                        <div className='footer-column social'>
                            <h6>
                                Connect with us
                            </h6>
                            <div className='footer-column-menu'>
                                <ul>
                                    {footerContactArray
                                        .map((obj) => (
                                            <li key={obj.link}>
                                                <Link to={`${obj.link}`}>
                                                    <span className={`${obj.icon}`}></span>
                                                    {obj.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p>© 2023 Paulo films.</p>
                        <p>This product uses the TMDB API but is not endorsed or certified by&nbsp;
                            <a href="https://www.themoviedb.org">
                                <Logo/>
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};