import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Root from "../../Root"
import Home from "../Home"
import AboutUs from "../../AboutUs/AboutUs"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/about',
                element: <AboutUs/>
            }

        ]
    },
]);

function Pages() {
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </>
    );
}

export default Pages;