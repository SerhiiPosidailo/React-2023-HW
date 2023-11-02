import css from "./Episode.module.css"
import {NavLink} from "react-router-dom";

import React from "react";



const Episode = ({episode}) => {
    const {id, name, episode: chapter} = episode;

    return (
        <div className={css.Episode}>
            <NavLink to={'/characters'}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>chapter: {chapter}</div>
            </NavLink>
        </div>


    );
};

export {
    Episode,
};