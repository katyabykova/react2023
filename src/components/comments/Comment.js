import React from 'react';
import css from './comments.module.css'
import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {

    const {postId, id, name, body} = comment

    const navigate = useNavigate();

    return (
        <div className={css.Comment}>
            <div className={css.text}>
                <div>postId: {postId}</div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>body: {body}</div>
            </div>
            <button onClick={() => {
                navigate('post', {state: postId})
            }}>SEE POST
            </button>
        </div>
    );
};

export {Comment};