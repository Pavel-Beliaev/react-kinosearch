import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

const Menu: React.FC = () => {

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='tel'>
                    <Link to="tel: +66 65 335 62 63">
                        <i className='fa fa-phone'></i>
                        +66 65 335 62 63
                    </Link>
                </div>
            </div>
            <Navbar/>
        </div>
    );
};

export default Menu;