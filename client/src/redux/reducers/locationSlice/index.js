import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  pickupCoord: {
   lat: 27.685492,
    lng:85.344623
  },
  pickupAddress: ''
};
const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, actions) => {
  
    },
 
  }
});
export const { setLocation } = LocationSlice.actions;
export default LocationSlice.reducer;