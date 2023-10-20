import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import MainPage from '../Pages/MainPage';

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<MainPage></MainPage>,
                loader:()=> fetch('#')
            }
        ]

    }
])

export default myCreatedRoute;