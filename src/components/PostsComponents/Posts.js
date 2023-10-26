import React, {useEffect, useState} from 'react';

import {postsService} from "../../service/postsSrvice";
import {Post} from "./Post";


const Posts = ({postsId}) => {

    const [posts, setPosts] = useState([])
    console.log(posts)

    useEffect(() => {
        postsService.getByPostId(postsId).then(({data}) => setPosts([data]))
    }, [postsId]);

    return (
        <div>
            {posts && posts.map(post =><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};