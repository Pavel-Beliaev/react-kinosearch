import React from 'react';
import './scss/app.scss'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='movies' element={<AllMovies/>}/>
                <Route path='news' element={<News/>}/>
                <Route path='contact' element={<ContactUs/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        )
    )

    return (
        <RouterProvider router={router}/>
    );
};

export default App;