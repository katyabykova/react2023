import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services/postsService";
import {Post} from "./Post";
import css from './Post.module.css'

const Posts = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postsService.getByUserID(userId).then(({data})=>setPosts(data));
    },[userId])
    return (
        <div className={css.Posts}>
            <h2>User's post:</h2>
            {
                posts.map(post=><Post post={post} key={post.id}/>)
            }
        </div>
    );
};

export {Posts};