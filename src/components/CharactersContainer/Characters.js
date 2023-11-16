import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {charactersActions} from "../../redux";
import {Character} from "./Character";


const Characters = () => {

    const {characters} = useSelector(state => state.characters)
    const {ids} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(charactersActions.getById({ids}))
    }, [ids, dispatch])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};