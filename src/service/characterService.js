import {apiService} from "./apiService";
import {urls} from "../constatnts";


const characterService = {
    getByIds:(ids) => apiService.get(urls.characters.byIds(ids))
}


export {
    characterService
}