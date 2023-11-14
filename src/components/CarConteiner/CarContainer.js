import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {carService} from "../../service";
import {Cars} from "../Cars";
import {CarForm} from "../CarForm";
import {carActions} from "../../redux";



const CarContainer = () => {

    const dispatch = useDispatch()
    const {cars, flag} = useSelector(state => state.cars)


    useEffect(() => {
        carService.getAll().then(({data})=> dispatch(carActions.setResponse(data)))
    }, [cars, flag, dispatch]);


    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarContainer};