import axios from "axios";

import {baseURL, carURL} from "../constants/urls";

const apiService = axios.create({baseURL})


const apiServiceCar = axios.create({baseURL:carURL})

export {
    apiService,
    apiServiceCar
}