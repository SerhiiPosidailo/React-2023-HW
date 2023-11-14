import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";


import {carValidator} from "../../validators";
import {carService} from "../../service";
import {carActions} from "../../redux";




const CarForm = () => {

    const {carForUpdate, flag} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    const {register,reset, handleSubmit,formState:{errors,isValid}, setValue} = useForm({
        mode:"all",
        resolver:joiResolver(carValidator)
    });


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carService.create(car)
        dispatch(carActions.setFlag(!flag))
        reset()
    }

    const update = async (car) => {
        await carService.updataById(carForUpdate.id, car)
        dispatch(carActions.setFlag(!flag))
        dispatch(carActions.setUpdate(null))
        reset()
    }


    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber:true
                })}/>
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber:true
                })}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'save'}></button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};