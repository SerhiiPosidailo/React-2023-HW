import React, {useEffect, useState} from 'react';
import axios from "axios";

import {baseURL} from "../../Constants/urls";
import {SpaceX} from "../SpaceX/SpaceX";
import css from './SpaceAll.module.css'

const SpacexAll = () => {
    const [spaceX, setSpaceX] = useState([])


    useEffect(() => {
        axios.get(baseURL).then(({data})=> setSpaceX(data.filter(res => (res.launch_year !== '2020'))))
    }, []);

    return (
        <div className={css.SpaceAll}>
            {spaceX.map(space => <SpaceX key={space.flight_number} space={space}/>)}
        </div>
    );
};

export {SpacexAll};