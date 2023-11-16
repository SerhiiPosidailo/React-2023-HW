import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../service";

const initialState = {
    characters: [],
    error: null
};

const getById = createAsyncThunk(
    'charactersSlice/getById',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids)
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getById.fulfilled, (state, action) => {
            state.characters = action.payload
        })
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getById
}


export {
    charactersReducer,
    charactersActions
}