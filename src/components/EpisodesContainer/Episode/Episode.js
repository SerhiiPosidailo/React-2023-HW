import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {episodesActions} from "../../../redux";
import css from "./Episode.module.css"

const Episode = ({episode}) => {
    const {id, name, episode:chapters, characters} = episode;
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',')
        dispatch(episodesActions.setNameEpisode(name))
        navigate(`/characters/${ids}`)
    }
    return (
        <div onClick={toCharacters} className={css.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapters: {chapters}</div>
        </div>
    );
};

export {Episode};