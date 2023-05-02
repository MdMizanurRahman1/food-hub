import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const ChefHeader = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default ChefHeader;