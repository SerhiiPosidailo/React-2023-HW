import React, {useEffect, useState} from 'react';

import {postsService} from "../../service/postsSrvice";
import {Post} from "./Post";



const Posts = ({postsId}) => {

    const [post, setPosts] = useState([])


    useEffect(() => {
        postsService.getByPostId(postsId).then(({data}) => setPosts(data))
    }, [postsId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};