import React, {useEffect, useState} from 'react';
import {getLaunch} from "../../../services/launches.api.service";

import css from './Launches.module.css'
import {Launch} from "../launch/Launch";

const Launches = () => {
    let [launches, setLaunches] = useState([]);
    useEffect(() => {
        getLaunch.then((launch) => {
            let filteredLaunch = () => launch.filter(value => value.launch_year !== "2020")
            setLaunches(filteredLaunch)
        })
    }, [])
    return (
        <div className={css.Launches}>
            <h1>Запуски кораблів окрім 2020 року:</h1>
            {
                launches.map((launch, index) => <Launch key={index} launch={launch}/>)
            }
        </div>
    );
};

export {Launches};