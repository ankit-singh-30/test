import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";
import locationSlice from "./locationSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantSlice,
    location: locationSlice,
  },
});
