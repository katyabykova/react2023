import React from 'react';
import css from './Post.module.css';

const Post = ({post, click}) => {
    let {id, title} = post;
    return (
        <div className={css.Post}>
            <div className={css.w15}>ID: {id}; TITLE: {title}</div>
            <button onClick={() => click(post)}>See Post</button>
        </div>
    );
};

export {Post};