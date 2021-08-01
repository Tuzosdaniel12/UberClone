import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	origin: null,
    destination: null,
    travelTimeInfo: null,
};

export const navSlice = createSlice({
        name: 'nav',
        initialState,
        reducer: {
            setOrigin: (state, action) => {
                state.origin = action.payload;
            },
            setDestination: (state, action) => {
                state.destination = action.payload;
            },
            setTravelTimeInfo: (state, action) => {
                state.travelTimeInfo = action.payload;
            }
        }
});

export const { setOrigin, setDestination, setTravelTimeInfo } = navSlice.actions;

//Selectors
export const selectOrigin = state => state.origin;

export const selectDestination = (state) => state.setDestination;

export const selectTravelTimeInfo = (state) => state.travelTimeInfo;

export default navSlice.reducer;