import React from 'react';
import css from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className={css.Menu}>
            <NavLink to='/todos'>Todos</NavLink>
            <NavLink to='/albums'>Albums</NavLink>
            <NavLink to='/comments'>Comments</NavLink>
        </div>
    );
};

export {Menu};