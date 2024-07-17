import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {vehicleSlice} from "@/entities/vehicle/model/vehicle-slice.ts";

const rootReducer = combineReducers({
    vehicles: vehicleSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

