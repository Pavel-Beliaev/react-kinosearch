import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {ReactComponent as BackToUpIcon} from "../public/SVG/chevron-up.svg";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";



const MainLayout = () => {
    const {pathname} = useLocation();

    const [dataKinoPoisk, setDataKinoPoisk] = useState([]);

    useEffect(() => {
        fetch('https://api.kinopoisk.dev/v1/movie?limit=3', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': 'ZZ11XDW-57R4FQJ-MAQGVAK-12EKRXX'
            }
        })
            .then(response => response.json())
            .then(data => setDataKinoPoisk(data.docs))
            .catch(error => console.error(error));
    }, [])
    console.log(dataKinoPoisk)

    return (
        <div className='wrapper'>
            <Navbar/>
            <Header pathname={pathname}/>
            <div className='frameworks'>
                <Outlet/>
            </div>
            <a href="#" className='back-to-top'>
                <BackToUpIcon/> {/*opacity: 0;*/}
            </a>
            <Footer/>
        </div>
    );
};

export default MainLayout;