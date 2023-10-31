import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getByUserId: (id) => axiosService.get(urls.posts.byId(id)),
    getPostById: (id) => axiosService.get(urls.posts.getPostById(id))
}


export {
    postService
}