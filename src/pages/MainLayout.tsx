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
    //     fetch('/?api_key=d2e6a036f6b0dbeacdb1e6d2fc5af3aa')
    //         .then(response => response.json())
    //         .then(data => setDataKinoPoisk(data.results))
    //         .catch(error => console.error(error));
    // }, [])

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