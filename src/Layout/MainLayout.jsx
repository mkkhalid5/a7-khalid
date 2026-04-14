import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/shared/footer/Footer';
import NavBar from '../components/shared/navbar/NavBar';


const MainLayout = () => {
    return (
        <div className='bg'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;