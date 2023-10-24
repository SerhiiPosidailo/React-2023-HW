import {axiosService} from "./axiosService";
import {urls} from "../Constants/urls";

const carServise ={
    getAll:() => axiosService.get(urls.cars.base),
    create:(data) => axiosService.post(urls.cars.base, data),
    updateById : (id, data) => axiosService.put(urls.cars.byId(id), data),
    delete: (id)=> axiosService.delete(urls.cars.byId(id))
}

export {
    carServise
}