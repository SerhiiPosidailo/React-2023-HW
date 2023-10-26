import React from 'react';

const Post = ({posts}) => {
    const {id, userId, title, body} = posts;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
}

export {Post};