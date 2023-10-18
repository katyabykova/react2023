import React from 'react';
import {Posts} from "./components/PostsContainer/Posts/Posts";
import {Launches} from "./components/LaunchContainer/Launches/Launches";
import './App.css'

const App = () => {
    return (
        <div className={'App'}>
            <Posts/>
            <Launches/>
        </div>
    );
};

export {App};