import React, {useEffect, useState} from 'react';
import arrowDown from '../public/SVG/duble-arrow-down.svg'
import {dataPage} from "../mock/statick";
import {HeaderProps} from "../@types/@types";



const Header: React.FC<HeaderProps> = ({pathname}) => {
    const [isVisibleEffect, setIsVisibleEffect] = useState(true);

    const stylePage = pathname.substring(1);



    useEffect(() => {
        setIsVisibleEffect(false);
        setTimeout(() => {
            setIsVisibleEffect(true)
        }, 0)
    }, [pathname])


    return (
        <div className='header' style={{backgroundImage:`${dataPage[stylePage].url}`}}>
            <img src={arrowDown} alt="Scroll down" className="scroll"/>
            <div className="container">
                {isVisibleEffect &&
                    <div className="blurb">
                        <span className="title">{dataPage[stylePage].title}</span>
                        <h1>{dataPage[stylePage].heading}</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;