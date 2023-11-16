import React from 'react';
import {useSelector} from "react-redux";

import css from "./Header.module.css"

const Header = () => {

    const {nameEpisode} = useSelector(state => state.episodes);
    return (
        <div className={css.Header}>
            {nameEpisode ? nameEpisode : 'The Rick and Morty'}
        </div>
    );
};

export {Header};