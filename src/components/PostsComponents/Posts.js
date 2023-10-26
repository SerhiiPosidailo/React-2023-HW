import React, {useEffect, useState} from 'react';

import {postsService} from "../../service/postsSrvice";
import {Post} from "./Post";



const Posts = ({postsId}) => {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        postsService.getByPostId(postsId).then(({data}) => setPosts(data))
    }, [postsId]);

    return (
        <div>
            {posts && <Post posts={posts}/>}
        </div>
    );
};

export {Posts};