import React from 'react';

import css from "./Header.module.css"
import {useAppContext} from "../../hooks/ussAppContext";

const Header = () => {
    const {episodeName} = useAppContext();

    return (
        <div className={css.Header}>
            <div>{episodeName ? `${episodeName}` : `Rick & Morty`}</div>
        </div>
    );
};

export {Header};