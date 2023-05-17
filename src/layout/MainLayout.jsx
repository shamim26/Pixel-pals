import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayout = () => {
    return (
      <div>
        <NavBar />
        <Outlet></Outlet>
      </div>
    );
};

export default MainLayout;