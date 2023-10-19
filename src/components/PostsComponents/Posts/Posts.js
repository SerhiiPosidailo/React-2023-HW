import axios, {postForm} from "axios";
import React, {useEffect, useState} from 'react';

import {Post} from "../Post/Post";
import css from "./Posts.module.css"
import {postsService} from "../../../services/postsService";
import {PostMore} from "../PostMore/PostMore";

const Posts = () => {
    const [post, setPost] = useState([])
    const [postMore, setPostMore]=useState(null)

    let clic = async (postId)=>{
        const {data} = await postsService.getById(postId)
        setPostMore(data)
    }

    useEffect(() => {
        postsService.getAll()
            .then(({data}) => setPost(data))
    }, []);
    return (
        <div>
            <div className={css.Posts}>
                {post.map(post => <Post key={post.id} post={post} clic={clic}/>)}
            </div>
            {
                postMore && <PostMore postMore={postMore}/>
            }
        </div>
    );

};

export {Posts};
