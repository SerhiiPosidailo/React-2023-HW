import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../service/carService";
import {carActions} from "../../redux/slices/carSlice";
import {Car} from "../Car/Car";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data})=> dispatch(carActions.setResponse(data)))
    }, [dispatch]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};