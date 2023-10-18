import React from 'react';
import css from './Launch.module.css'

const Launch = ({launch}) => {
    let {mission_name: name, launch_year: year, links: {mission_patch_small: img}} = launch;
    if (year !== "2020") {
        return (
            <div className={css.Launch}>
                <div>Mission name: {name} <br/><br/>
                    Launch year: {year}</div>
                <div><img src={img} alt="name"/></div>
            </div>
        );
    }
};

export {Launch};