import React from 'react';
import {Comments} from "../components/comments/Comments";
import {Outlet} from "react-router-dom";
import css from '../components/comments/comments.module.css'

const CommentsPage = () => {
    return (
        <div className={css.CommentsPage}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};