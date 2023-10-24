import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../Service/userAxiosServicePost";



const UserForms = ({setUsers}) => {
    const {reset, handleSubmit, register} = useForm();

    const click = async (user) => {
        const {data} = await userService.create(user);
        setUsers(prev=>[...prev,data])
        reset()
    }
    return (
        <form onSubmit={handleSubmit(click)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'surname'} {...register('surname')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
        </form>
    );
};

export {UserForms};