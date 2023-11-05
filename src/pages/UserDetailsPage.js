import React from 'react';
import {UserDetais} from "../components/UsersContainer/UserDetais";
import {Outlet} from "react-router-dom";
import css from '../components/UsersContainer/User.module.css'

const UserDetailsPage = () => {
    return (
        <div className={css.UserDetailsPage}>
            <div>
            <h2>User Details:</h2>
            <UserDetais/>
            </div>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};