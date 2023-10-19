import React from 'react';

import css from './PostMore.module.css'

const PostMore = ({postMore}) => {
    const {id,title,body,userId} = postMore
    return (
        <div className={css.PostMore}>
            <h1>id:{id}</h1>
            <h1>userId:{userId}</h1>
            <h3>title:{title}</h3>
            <p>body:{body}</p>
        </div>
    );
};

export {PostMore};