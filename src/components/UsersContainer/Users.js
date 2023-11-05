import React from 'react';
import {useLoaderData} from "react-router-dom";

import {User} from "./User";
import css from './User.module.css'

const Users = () => {
    const {data:users} = useLoaderData();
    return (
        <div className={css.Users}>
            <h2>Users:</h2>
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};