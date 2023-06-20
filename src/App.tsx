import React from 'react';
import './scss/app.scss'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import AllMoviesPage from "./pages/AllMoviesPage";
import People from "./pages/People";
import ContactsPage from "./pages/ContactsPage";
import ErrorPage from "./pages/ErrorPage";
import DetailInfoPage from "./pages/DetailInfoPage";
import {AllMoviesContent} from "./components";

const App: React.FC = () => {
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