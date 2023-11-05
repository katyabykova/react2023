import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";

import css from './User.module.css'


const User = ({user}) => {
    const {id,name} = user;
    const navigate = useNavigate();
    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>navigate(`${id}`,{state:user})}>User Details</button>
        </div>
    );
};

export {User};