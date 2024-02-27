import React, {FC} from 'react';
import './scss/app.scss'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {AllMoviesPage, ContactsPage, DetailInfoPage, ErrorPage, Home, People} from "./pages";
import {MainLayout} from "./layouts/MainLayout";

const App: FC = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='movie' element={<AllMoviesPage/>}/>
                <Route path='tv' element={<AllMoviesPage/>}/>
                <Route path='persons' element={<People/>}/>
                <Route path=':type/:id' element={<DetailInfoPage/>}/>
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
