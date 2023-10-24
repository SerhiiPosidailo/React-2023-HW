import React, {useEffect, useState} from 'react';


import {commentsService} from "../../Service/commentsAxiosService";
import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";



const CommentContainer = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAllComent().then(({data})=>setComments(data))
    }, []);

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentContainer};