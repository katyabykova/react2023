import React, {useEffect, useState} from 'react';
import css from './post.module.css'
import {useLocation} from "react-router-dom";
import {postApiService} from "../../services/post.api.service";

const Post = () => {

    const {state} = useLocation();

    const [post, setPost] = useState([]);

    useEffect(() => {
        postApiService.getById(state).then(({data}) => setPost(data))
    }, [state])

    const {userId, id, title, body} = post;

    return (
        <div className={css.Post}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};