import React from 'react';
import {Link} from "react-router-dom";

export const Telephone = () => {
    return (
        <div className='container heading'>
            <div className='tel'>
                <Link to="tel: +66 65 335 62 63">
                    <i className='fa fa-phone'></i>
                    +66 65 335 62 63
                </Link>
            </div>
        </div>
    );
};