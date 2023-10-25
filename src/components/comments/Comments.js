import React, {useEffect, useState} from 'react';
import {commentsApiService} from "../../services/comments.api.service";
import {Comment} from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);


    useEffect(() => {
        commentsApiService.getAll().then(({data}) => setComments(data))
    })

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};