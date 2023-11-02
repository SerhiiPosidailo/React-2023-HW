import {axiosService} from "./axiosService";
import {urls} from "../contants/urls";

const characterService = {
    getAll:()=> axiosService.get(urls.character.base),
    getById:(id) => axiosService.get(urls.character.byId(id))
}

export {
    characterService
}