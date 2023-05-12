import React from "react"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Root from "components/Root"
import Home from "components/home/Home"
import AboutUs from "components/AboutUs/AboutUs"
import Contacts from "components/Contacts/Contacts"
import Shop from "components/Shop/Shop"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/about',
                element: <AboutUs/>
            },
            {
                path:'/contacts',
                element: <Contacts/>
            },
            {
                path:'/shop',
                element: <Shop/>
            }

        ]
    },
])

function Pages() {
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </>
    )
}

export default Pages