import React, {FC, useEffect, useState} from "react";
import {ReactComponent as ArrowDownIcon} from "../../assets/SVG/duble-arrow-down.svg";
import {useAppSelector} from "../../../../Store/store";
import {useLocation} from "react-router-dom";
import {HeaderSlider} from "../HeaderSlider";
import './header.scss'

type HeaderInfo = {
    genre: string;
    title: string;
    backgroundImage: string;
};
export const Header:FC = () => {
    const [isVisibleEffect, setIsVisibleEffect] = useState(false);
    const [dataInfo, setDataInfo] = useState<HeaderInfo>({
        genre: "",
        title: "",
        backgroundImage: "",
    });
    const {pathname} = useLocation();

    const {base_url, backdropSize} = useAppSelector((state) => state.config);
    const data = useAppSelector((state) => state.header);
    const stylePage = pathname.substring(1);
    const genre = data.film.genres.map((genre) => genre.name).join(", ");

    useEffect(() => {
        setIsVisibleEffect(false);
        const timeout = setTimeout(() => setIsVisibleEffect(true), 50);
        setDataInfo({
            genre: data ? data[stylePage]?.heading : genre,
            title: data[stylePage] ? data[stylePage]?.title : data.film.title,
            backgroundImage: data[stylePage]
                ? `${data[stylePage]?.url}`
                : `url(${base_url}${backdropSize}${data.film.url})`,
        });
        return () => clearTimeout(timeout);
    }, [pathname, data]);

    return (
        <div
            className="header"
            style={{
                backgroundImage: dataInfo.backgroundImage,
            }}
        >
            <span className="scroll">
                <ArrowDownIcon/>
            </span>
            {pathname === "/"
                ? (
                    <HeaderSlider/>
                )
                : (
                    <div className="container">
                        <div className={isVisibleEffect ? "with-animate" : "blurb"}>
                            <span className="title">{dataInfo.genre}</span>
                            <h1>{dataInfo.title}</h1>
                        </div>
                    </div>
                )}
        </div>
    );
};
