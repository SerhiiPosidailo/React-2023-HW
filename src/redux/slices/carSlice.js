import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars:[],
    carForUpdate: null,
    flag: false
}

const carSlice = createSlice({
    name : 'carSlice',
    initialState,
    reducers:{
        setResponse:(state, action) => {
            state.cars = action.payload
        },
        setUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        setFlag: (state, action) => {
            state.flag = action.payload
        }
    }
})

const {reducer:carReducer, actions} = carSlice;

const carActions = {
    ...actions
}

export {carReducer, carActions}