import React from 'react';
import {useForm} from "react-hook-form";

import {commentsService} from "../../Service/commentsAxiosService";


const CommentForm = ({setComments}) => {


    const save = async (comment) => {
        const {data} = await commentsService.createComment(comment)
        setComments(prev => [...prev, data])
        reset()
    }
    
    const {reset, handleSubmit,register} = useForm();
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'postId'} {...register('postId')}/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export {CommentForm};