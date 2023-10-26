import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const postsService = {
    getByPostId:(postsId)=> axiosService.get(urls.base.getByPostId(postsId))
}

export {
    postsService
}

