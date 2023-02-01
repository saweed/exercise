import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display_unit: 'celcius'
};

export const converterSlice = createSlice({
    name: 'DISPLAY_UNIT',
    initialState,
    reducers: {
        'setDisplayUnit': (state, action) => {
            state.display_unit = action.payload;
        }
    }
})

export const {setDisplayUnit} = converterSlice.actions;
export const getDisplayUnit = (state :any)=> {
    return state.displayUnit.display_unit;
  }

export default converterSlice.reducer;