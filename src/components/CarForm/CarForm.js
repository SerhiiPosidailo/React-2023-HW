import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices/carSlice";

const CarForm = () => {

    const {register,reset, handleSubmit,formState:{errors,isValid}, setValue} = useForm({
        mode:"all",
        resolver:joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    const trigger = () => {
        dispatch(prev => !prev)
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate, setValue]);

    const save = async (car)=>{
        await dispatch(carActions.saveCar(car));
        trigger()
        reset()
    }

    const update = async (car) => {
        await dispatch(carActions.setResponse(carForUpdate.id, car ))
        trigger()
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