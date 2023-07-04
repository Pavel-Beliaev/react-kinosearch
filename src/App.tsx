import React, {FC} from 'react';
import './scss/app.scss'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {AllMoviesPage, ContactsPage, DetailInfoPage, ErrorPage, Home, MainLayout, People} from "./pages";
import {AllMoviesLayout} from "./modules";

const App:FC = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='all' element={<AllMoviesPage/>}>
                    <Route path=':type' element={<AllMoviesLayout/>}/>
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