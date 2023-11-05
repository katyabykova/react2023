import React from 'react';
import {useLoaderData} from "react-router-dom";
import css from "../components/PostsContainer/Post.module.css";
import {Comments} from "../components/CommentsContainer/Comments";

const PostDetailsPage = () => {
    const {data: post} = useLoaderData();
    const {userId, id, title, body} = post;
    return (
        <div className={css.PostDetails}>
            <div>
                <h2>Post Details:</h2>
                <div className={css.Post}>
                    <div>userId: {userId}</div>
                    <div>id: {id}</div>
                    <div>title: {title}</div>
                    <div>body: {body}</div>
                </div>
            </div>
            <Comments postId={id}/>
        </div>
    );
};

export {PostDetailsPage};