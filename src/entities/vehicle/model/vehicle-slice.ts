import { createAppAsyncThunk } from "@/shared";
import { getVehicles, Vehicle } from "@/entities";
import { createSlice } from "@reduxjs/toolkit";


export const fetchVehicles = createAppAsyncThunk<Vehicle[], unknown>(
    'vehicles/fetchVehicles',
    async () => {
        try {
            const res = await getVehicles();
            return res.data;
        } catch {
            return [];
        }
    }
);

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState: {
        vehicles: []
    },
    reducers: {
        removeVehicle(state, action) {
            state.vehicles = state.vehicles.filter((vehicle) => vehicle.id !== action.payload.id);
        },
        updateVehicle(state, action) {
            const index = state.vehicles.findIndex(vehicle => vehicle.id === action.payload.id);
            if (index !== -1) {
                state.vehicles[index] = { ...state.vehicles[index], ...action.payload };
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVehicles.fulfilled, (state, action) => {
            state.vehicles = action.payload;
        });
    }
});

export const { removeVehicle, updateVehicle } = vehiclesSlice.actions;
export const vehicleSlice = vehiclesSlice.reducer;
export const vehicleThunk = { fetchVehicles };
