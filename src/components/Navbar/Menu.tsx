import React from 'react';
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

const Menu: React.FC = () => {

    return (
        <div className='menu'>
            <div className='container heading'>
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