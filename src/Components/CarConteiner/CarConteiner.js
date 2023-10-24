import React, {useEffect, useState} from 'react';


import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../service/carService";


const CarConteiner = () => {

    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);


    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarConteiner};