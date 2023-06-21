import React, { FC, useEffect, useState } from "react";
import { ReactComponent as ArrowDownIcon } from "../public/SVG/duble-arrow-down.svg";
import { useAppSelector } from "../Store/store";
import { HeaderSlider } from "./HeaderSlider";
import { useLocation } from "react-router-dom";

type HeaderInfo = {
  genre: string;
  title: string;
};
export const Header = () => {
  const [isVisibleEffect, setIsVisibleEffect] = useState(false);
  const [dataInfo, setDataInfo] = useState<HeaderInfo>({
    genre: "",
    title: "",
  });
  const { pathname } = useLocation();

  const { base_url, backdropSize } = useAppSelector((state) => state.config);
  const data = useAppSelector((state) => state.header);

  const stylePage = pathname.substring(1);
  const genre = data.film.genres.map((genre) => genre.name).join(", ");

  useEffect(() => {
    setIsVisibleEffect(false);
    const timeout = setTimeout(() => setIsVisibleEffect(true), 50);
    setDataInfo({
      genre: data[stylePage] ? data[stylePage]?.heading : genre,
      title: data[stylePage] ? data[stylePage]?.title : data.film.title,
    });
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className="header"
      style={{
        backgroundImage: data[stylePage]
          ? `${data[stylePage]?.url}`
          : `url(${base_url}${backdropSize}${data.film.url})`,
      }}
    >
      <span className="scroll">
        <ArrowDownIcon />
      </span>
      {pathname === "/" ? (
        <HeaderSlider />
      ) : (
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
