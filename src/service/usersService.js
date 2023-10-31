import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const usersService = {
    getAll: () => axiosService.get(urls.users.users),
    getDetails: (userId) => axiosService.get(urls.users.getDetailsByUserId(userId))
}

export {
    usersService
}