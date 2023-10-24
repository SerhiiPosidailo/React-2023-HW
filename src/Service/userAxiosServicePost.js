import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";


const userService = {
    getAll:()=> axiosService.get(urls.base),
    create:(user) => axiosService.post(urls.base, user),

}


export {
    userService,
}