import React from 'react';
import {Link} from "react-router-dom";
import {footerMenu} from "../mock/statick";

export const Footer: React.FC = () => {

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
                                            <li>
                                                <Link to="/">
                                                    FAQs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Give us feedback
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Contact us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        <div className='footer-column'>
                            <h6>Connect with us</h6>
                            <div className='footer-column-menu'>
                                <ul>
                                    <li>
                                        <Link to="https://twitter.com">
                                            <span className='fa fa-twitter'></span>
                                            Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.facebook.com/profile.php?id=100014321836619&sk=about">
                                            <span className='fa fa-facebook'></span>
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://t.me/ComeThroughDontLinger">
                                            <span className='fa fa-telegram'></span>
                                            Telegram
                                        </Link>
                                    </li>
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