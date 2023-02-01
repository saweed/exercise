import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
};

export const currentSlice = createSlice({
    name: 'CURRENT_REPORT',
    initialState,
    reducers: {
        'setCurrent': (state, action) => {
            return action.payload;
        }
    }
})

export const {setCurrent} = currentSlice.actions;
export const currentReport = (state: any) => {
    return state.current
}

export default currentSlice.reducer;