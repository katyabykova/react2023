import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";
import css from './Comment.module.css'
const Comments = ({postId}) => {

    const [comments,setComments] = useState([]);
    useEffect(()=>{
        commentsService.getByPostId(postId).then(({data})=>setComments(data))
    },[postId])
    return (
        <div className={css.Comments}>
            <h2>Comments of post:</h2>
            <div className={css.box}>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
        </div>
    );
};

export {Comments};