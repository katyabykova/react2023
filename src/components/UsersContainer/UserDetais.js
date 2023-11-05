import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import css from './User.module.css';

const UserDetais = () => {
    const {userId} = useParams();
    const [user, setUser] = useState([]);
    const {id, name, username, email, phone} = user;
    useEffect(() => {
        userService.byId(userId).then(({data}) => setUser(data))
    }, [userId])
    const navigate = useNavigate();
    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <br/>
            <button onClick={()=>navigate('posts')}>User's posts</button>
        </div>
    );
};

export {UserDetais};