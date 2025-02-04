import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact';
import SignUp from '../Pages/SignUp/SalesSignUp';
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import SalesProfile from '../Pages/Profile/SalesProfile';
import DeliveryManProfile from '../Pages/Profile/DeliveryManProfile';
import DeliveryManSignUp from '../Pages/SignUp/DeliveryManSignUp';
import SalesSignUp from '../Pages/SignUp/SalesSignUp';
import CustomerSignUp from '../Pages/SignUp/CustomerSignUp';
import CustomerProfile from '../Pages/Profile/CustomerProfile';


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/salesprofile',
                element: <SalesProfile></SalesProfile>
            },
            {
                path: '/sales_singup',
                element: <SalesSignUp></SalesSignUp>
            },
            {
                path: '/delivery_man_profile',
                element: <DeliveryManProfile></DeliveryManProfile>
            },
            {
                path: '/delivery_man_signup',
                element: <DeliveryManSignUp></DeliveryManSignUp>
            },
            {
                path: '/customer_signup',
                element: <CustomerSignUp></CustomerSignUp>
            },
            {
                path: '/customer_profile',
                element: <CustomerProfile></CustomerProfile>
            },

        ]
    }
])

export default Router;