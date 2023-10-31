import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentsService = {
    getComments: (id) => axiosService.get(urls.comments.getComments(id))
}

export {
    commentsService
}