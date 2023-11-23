import {apiServiceCar} from "./apiService";
import {cars} from "../constants/urls";

class CarService {
    getAll() {
        return apiServiceCar.get(cars)
    }
}

export const carService = new CarService()