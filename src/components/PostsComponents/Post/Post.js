import React from 'react';

import css from "./Post.module.css"
const Post = ({post, clic}) => {
    let {id,title} = post



    return (
        <div className={css.Post}>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={()=>clic(id)} className={css.Button}>More</button>
        </div>
    );
};

export {Post};