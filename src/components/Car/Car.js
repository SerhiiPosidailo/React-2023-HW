import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices/carSlice";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();



    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.setResponse(car))}>update</button>
            <button onClick={()=>dispatch(carActions.setResponse(id))}>delete</button>
        </div>
    );
};

export {Car};