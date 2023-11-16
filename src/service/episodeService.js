import {apiService} from "./apiService";
import {urls} from "../constatnts";


const episodeService = {
    getAll:(page) => apiService.get(urls.episode, {params:{page}})
}

export {
    episodeService
}