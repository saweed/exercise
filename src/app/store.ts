import { configureStore } from "@reduxjs/toolkit";
import currentReducer from '../app/reports/current/currentSlice';
import displayUnitReducer from '../app/converter/converterSlice';
import weeklyReducer from './reports/weekly/weeklySlice'

export const store = configureStore({
    reducer: {
        current: currentReducer,
        weekly: weeklyReducer,
        displayUnit: displayUnitReducer
    }
})