import React, {FC, useEffect, useState} from 'react';
import {ReactComponent as ArrowDownIcon} from "../public/SVG/duble-arrow-down.svg";
import {useAppSelector} from "../Store/store";
import {HeaderSlider} from "./HeaderSlider";

export type HeaderProps = {
    pathname: string
}
export const Header:FC<HeaderProps> = ({pathname}) => {
    const [isVisibleEffect, setIsVisibleEffect] = useState(true);

    const {base_url, backdropSize} = useAppSelector((state) => state.config);
    const data = useAppSelector(state => state.header);

    const stylePage = pathname
        .substring(1);
    const genre = data.film.genres
        .map((genre) => genre.name)
        .join(', ')


    useEffect(() => {
        setIsVisibleEffect(false);
        setTimeout(() => {
            setIsVisibleEffect(true)
        }, 0)
    }, [pathname]);


    return (
        <div
            className='header'
            style={{
                backgroundImage: data[stylePage]
                    ? `${data[stylePage]?.url}`
                    : `url(${base_url}${backdropSize}${data.film.url})`
            }}
        >
            <span className="scroll">
                <ArrowDownIcon/>
            </span>
            {pathname === '/'
                ? <HeaderSlider/>
                : <div className="container">
                    {isVisibleEffect &&
                        <div className="blurb">
                            <span className="title">
                                {data[stylePage]
                                    ? data[stylePage]?.heading
                                    : genre
                                }
                            </span>
                            <h1>
                                {data[stylePage]
                                    ? data[stylePage]?.title
                                    : data.film.title
                                }
                            </h1>
                        </div>
                    }
                </div>
            }
        </div>
    );
};