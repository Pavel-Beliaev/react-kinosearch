import React, {FC} from 'react';
import './scss/app.scss'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {AllMoviesContent} from "./components";
import {AllMoviesPage, ContactsPage, DetailInfoPage, ErrorPage, Home, MainLayout, People} from "./pages";

const App:FC = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='all' element={<AllMoviesPage/>}>
                    <Route path=':type' element={<AllMoviesContent/>}/>
                </Route>
                <Route path='all/:type/:id' element={<DetailInfoPage/>}/>
                <Route path='persons' element={<People/>}/>
                <Route path='person/:id' element={<DetailInfoPage/>}/>
                <Route path='contact' element={<ContactsPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        )
    )

    return (
        <RouterProvider router={router}/>
    );
};

export default App;