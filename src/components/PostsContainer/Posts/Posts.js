import React, {useEffect, useState} from 'react';
import css from './Posts.module.css';
import {Post} from "../Post/Post";
import {getPosts} from "../../../services/posts.api.service";

const Posts = () => {
    let [postDetails, setPostDetails] = useState(null);
    let click = (post) => setPostDetails(post);
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts.then(posts => setPosts(posts))
    }, [])
    return (
        <div className={css.Posts}>
            <div>
                <h1>Posts:</h1>
                {
                    posts.map((post, index) => <Post key={index} post={post} click={click}/>)
                }
            </div>
            <div className={css.w14}>
                {
                    postDetails && <div><h1>Post Details:</h1>
                        <div
                            className={css.postsDetails}>USERID: {postDetails.userId},<br/> ID: {postDetails.id},<br/> TITLE: {postDetails.title},<br/> BODY:{postDetails.body}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};


export {Posts};