import {useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';

import css from "./Episodes.module.css"
import css1 from "./Button.module.css"
import {episodeService} from "../../service/episodeService";
import {Episode} from "./Episode";




const Episodes = () => {

    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    const pageQuery = query.get('page')

    useEffect(() => {
        episodeService.getAll(pageQuery).then(({data}) => {
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })
    }, [pageQuery, query]);


    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }


    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css1.Button}>
                <button disabled={!prevNext.prev} onClick={prev}>Prev</button>
                <button disabled={!prevNext.next} onClick={next}>Next</button>
            </div>

        </div>
    );
};

export {
    Episodes
};