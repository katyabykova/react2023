import React from 'react';

import css from './Post.module.css'
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const navigate = useNavigate();
    const {userId, title, id:postId} = post
    return (
        <div className={css.Post}>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <br/>
            <button onClick={()=>navigate(`${postId}`,{state:post})}>Post Details</button>
        </div>
    );
};

export {Post};