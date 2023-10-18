import React, {useEffect, useState} from 'react';
import {getLaunch} from "../../../services/launches.api.service";

import css from './Launches.module.css'
import {Launch} from "../launch/Launch";

const Launches = () => {
    let [launches,setLaunches] = useState([]);
    useEffect(()=>{
        getLaunch.then(launch=>setLaunches(launch))
    },[])
    return (
        <div className={css.Launches}>
            <h1>Запуски кораблів окрім 2020 року:</h1>
            {
                launches.map((launch,index)=><Launch key={index} launch={launch}/>)
            }
        </div>
    );
};

export {Launches};