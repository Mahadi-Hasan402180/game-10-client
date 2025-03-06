import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';


const AuthLayout = () => {
    return (
        <div>
            <header className='mx-auto mb-3 w-11/12'>
                <Navber></Navber>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;