import React, {useEffect, useState} from 'react';

import {carServise} from "../../service/carServise";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";


const CarConteiner = () => {

    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carServise.getAll().then(({data})=>setCars(data))
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