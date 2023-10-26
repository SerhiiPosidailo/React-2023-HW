import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Home.module.css'

const HomeComponents = () => {
    return (
        <div className={css.Home}>
            <div>
                <NavLink to={'/todos'}>Todos</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>
        </div>
    );
};

export {HomeComponents};