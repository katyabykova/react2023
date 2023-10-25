import React from 'react';
import {Menu} from "../components/menu/Menu";
import {Outlet} from "react-router-dom";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div className={css.Main}>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};