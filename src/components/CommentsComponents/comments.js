import React, {useEffect, useState} from 'react';

import {commentsService} from "../../service/commentsService";
import {Comment} from "./comment";

const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};