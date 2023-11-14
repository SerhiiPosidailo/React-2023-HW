import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService ={
    getAll:() => apiService.get(urls.cars.base),
    create:(data) => apiService.get(urls.cars.base, data),
    updataById: (id, data) => apiService.get(urls.cars.byId(id), data),
    delete: (id) => apiService.get(urls.cars.byId(id)),
}

export {
    carService
}