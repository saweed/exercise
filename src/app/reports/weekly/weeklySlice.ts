import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    weekly:{},
    barData:{}
};

export const weeklySlice = createSlice({
    name: 'WEEKLY_REPORT',
    initialState,
    reducers: {
        'setWeekly': (state, action) => {
            state.weekly = action.payload;
        },
        'setBarData': (state, action) => {
            const {list}: any = current(state).weekly;
            const bar_data = list.filter((item:any) => {
                let dataDate = new Date(item.dt * 1000);
                const strDate = dataDate.toISOString().split('T')[0];
                return action.payload == strDate
            })
            state.barData = bar_data;
        }
    }
})

export const {setWeekly, setBarData} = weeklySlice.actions;
export const weeklyReport = (state: any) => {
    return state.weekly.weekly
}
export const barData = (state: any) => {
    return state.weekly.barData
}
export default weeklySlice.reducer;