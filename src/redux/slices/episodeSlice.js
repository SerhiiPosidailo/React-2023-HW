import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodeService} from "../../service";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    error: null,
    nameEpisode:null

};

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const episodesSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setNameEpisode:(state, action)=>{
            state.nameEpisode = action.payload
        }
    },
    extraReducers: builder => builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {prev, next}, results} = action.payload
                state.prevPage = prev
                state.nextPage = next
                state.episodes = results
            })
});

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions
}

