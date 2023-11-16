import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from "./Paginator.module.css"

const Paginator = () => {
    
    const {prevPage, nextPage} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams();

    const prev =()=>{
        setQuery(prev1 => {
            prev1.set('page', `${+prev1.get("page")-1}`)
            return prev1
        })
    }

    const next =()=>{
        setQuery(prev1 => {
            prev1.set('page', `${+prev1.get("page")+1}`)
            return prev1
        })
    }

    return (
        <div>
            <div className={css.Button}>
                <button disabled={!prevPage} onClick={prev}>Prev</button>
                <button disabled={!nextPage} onClick={next}>Next</button>
            </div>
        </div>
    );
};

export {Paginator};