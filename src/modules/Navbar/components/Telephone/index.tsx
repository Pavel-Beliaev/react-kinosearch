import React, {FC} from 'react';
import {Link} from "react-router-dom";
import './telephone.scss'

export const Telephone:FC = () => {
    return (
        <div className='heading'>
            <div className='tel'>
                <Link to="tel: +66 65 335 62 63">
                    <i className='fa fa-phone'></i>
                    +66 65 335 62 63
                </Link>
            </div>
        </div>
    );
};