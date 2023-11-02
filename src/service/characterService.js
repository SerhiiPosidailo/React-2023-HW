import {axiosService} from "./axiosService";


const characterService = {
    getCharacters:(character) => axiosService.get(character)
}

export {
    characterService
}