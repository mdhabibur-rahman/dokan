import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact';
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/singup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])

export default Router;