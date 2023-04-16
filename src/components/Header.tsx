import React, {useEffect, useState} from 'react';
import {dataPage} from "../mock/statick";
import {HeaderProps} from "../@types/@types";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import {ReactComponent as ArrowDownIcon} from "../public/SVG/duble-arrow-down.svg";


const Header: React.FC<HeaderProps> = ({pathname}) => {
    const [isVisibleEffect, setIsVisibleEffect] = useState(true);

    const stylePage = pathname.substring(1);

    console.log(pathname)
    useEffect(() => {
        setIsVisibleEffect(false);
        setTimeout(() => {
            setIsVisibleEffect(true)
        }, 0)
    }, [pathname]);


    return (
        <div className='header' style={{backgroundImage: `${dataPage[stylePage].url}`}}>
          <span className="scroll"><ArrowDownIcon/></span>
            {pathname === '/'
                ?
                <HeaderSlider/>
                :
                <div className="container">
                    {isVisibleEffect &&
                        <div className="blurb">
                            <span className="title">{dataPage[stylePage].title}</span>
                            <h1>{dataPage[stylePage].heading}</h1>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Header;