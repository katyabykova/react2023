import React from 'react';

import {Simpsons} from "./components/Simpsons";
import './style.css'
import {RickUsers} from "./components/RickUsers";

const App = () => {
    return (
        <div>
            <Simpsons/>
            <RickUsers/>
        </div>
    );
};

export {App};
