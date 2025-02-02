import React from 'react';
import Navbar from "../Pages/Sharde/Navbar";
import Footer from "../Pages/Sharde/Footer";
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;