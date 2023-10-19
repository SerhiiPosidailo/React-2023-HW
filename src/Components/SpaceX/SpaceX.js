import React from 'react';

import css from './SpaceX.module.css'

const SpaceX = ({space}) => {
    const {mission_name, launch_year, mission_patch_small} = space;


    return (
        <div className={css.SpaceX}>
            <h1>mission_name: {mission_name}</h1>
            <h1>launch_year: {launch_year}</h1>
            <img src={space.links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {SpaceX};

