import {axiosService} from "./axiosService";
import {urls} from "../Constants/urls";

const carServise ={
    getAll:() => axiosService.get(urls.cars.base),
    create:(data) => axiosService.post(urls.cars.base, data),
    updataById : (id, data) => axiosService.put(urls.cars.byId(id), data),
    dalete: (id)=> axiosService.delete(urls.cars.byId(id))
}

export {
    carServise
}