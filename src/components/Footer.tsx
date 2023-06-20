import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {footerContactArray, footerLinkArray, footerMenu} from "../mock/statick";

export const Footer: FC = () => {


    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-main'>
                    <div className='footer-row'>
                        {footerMenu
                            .map((value) => (
                                <div
                                    key={value}
                                    className='footer-column'
                                >
                                    <h6>{value}</h6>
                                    <div className='footer-column-menu'>
                                        <ul>
                                            {footerLinkArray
                                                .map((text) => (
                                                    <li key={text}>
                                                        <Link to="/">
                                                            {text}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='footer-column'>
                            <h6>Connect with us</h6>
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
                        <p>2023 © Paulo films.&nbsp; All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};