import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import TopRated from './TopRated/TopRated';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <TopRated></TopRated>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;