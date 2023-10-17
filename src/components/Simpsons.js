import React from 'react';

import {simpsonsArray} from "../data/simpsonsArray";
import {Simpson} from "./Simpson";

const Simpsons = () => {
    return (
        <div>
            <h1>1. Описати всю сім'ю сімпсонів (5 персонажів)</h1>
            <div className={'box'}>
                {
                    simpsonsArray.map((simpson, index) =><Simpson key={index} simpson={simpson}/>)
                }
            </div>
        </div>
    );
};

export {Simpsons};