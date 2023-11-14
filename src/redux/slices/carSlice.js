import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars: []
}

let carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setResponse: (state = initialState, action) => {
            state.cars =  action.payload;
        },
        saveCar:(state, action) => {
            state.cars += action.payload
        }
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}