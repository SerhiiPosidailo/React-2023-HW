import {axiosService} from "./axiosService";
import {urls} from "../Constants/urls";

const commentsService = {
    getAllComent :()=> axiosService.get(urls.comment),
    createComment:(coment) => axiosService.post(urls.comment, coment)
}

export {
    commentsService
}