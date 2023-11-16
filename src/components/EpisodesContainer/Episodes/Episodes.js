import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodesActions} from "../../../redux";
import {Episode} from "../Episode";
import {Paginator} from "../../Paginator";
import css from "./Episodes.module.css"


const Episodes = () => {

    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')


    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [page, dispatch, setQuery]);


    return (
        <>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div>
                <Paginator/>
            </div>
        </>
    );
};

export {Episodes};