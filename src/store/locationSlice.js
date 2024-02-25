import { createSlice } from "@reduxjs/toolkit";
import {
  getLocationDetails,
  updateLocalStorageLocation,
} from "../utils/helperFunction";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: getLocationDetails(),
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
      updateLocalStorageLocation(state.location);
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
