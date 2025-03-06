import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
const HomeLayout = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto'>
                <Navber></Navber>
            </nav>
            <Outlet></Outlet>
            <footer className='w-11/12 mx-auto pt-5 ' >
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default HomeLayout;