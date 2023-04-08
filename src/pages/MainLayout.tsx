import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";



const MainLayout = () => {
    const {pathname} = useLocation();

    const [dataKinoPoisk, setDataKinoPoisk] = useState([]);

    // useEffect(() => {
    //     fetch('https://unogsng.p.rapidapi.com/genres', {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '8eba846fb6mshf4e86bfabb90b42p1cbb3djsn98a0ff61fc46',
    //             'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => setDataKinoPoisk(data.docs))
    //         .catch(error => console.error(error));
    // }, [])
    // console.log(dataKinoPoisk)

    return (
        <div className='wrapper'>
            <Navbar/>
            <Header pathname={pathname}/>
            <div className='frameworks'>
                <Outlet/>
            </div>
            <a href="#" className='back-to-top show'>
                <i className='fa fa-chevron-up'></i>
                {/*opacity: 0;*/}
            </a>
            <Footer/>
        </div>
    );
};

export default MainLayout;