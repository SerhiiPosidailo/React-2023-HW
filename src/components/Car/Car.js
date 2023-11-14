import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../service";
import {carActions} from "../../redux";



const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();
    const {flag} = useSelector(state => state.cars)


    const carDel = async (carId) => {
        await carService.delete(carId)
        dispatch(carActions.setFlag(!flag))
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.setUpdate(car))}>update</button>
            <button onClick={()=>carDel(id)}>delete</button>
        </div>
    );
};

export {Car};