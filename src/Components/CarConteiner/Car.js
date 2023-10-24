import React from 'react';
import {carServise} from "../../service/carServise";


const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car;

    const delCar = async (id) => {
        await carServise.dalete(id)
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={()=>delCar(id)}>delete</button>
        </div>
    );
};

export {Car};