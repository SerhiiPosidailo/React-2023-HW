import {axiosService} from "./axiosService";
import {urls} from "../contants/urls";

const episodeService = {
    getAll:(page='1') => axiosService.get(urls.episode.base, {params:{page}}),

}


export {
    episodeService
}