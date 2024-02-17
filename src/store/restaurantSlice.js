import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantItems: [],
    topRestaurants: [],
    carouselItems: [],
  },
  reducers: {
    fillAllRestaurants: (state, action) => {
      state.restaurantItems = action.payload;
    },
    fillTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    putCarouselItems: (state, action) => {
      state.carouselItems = action.payload;
    },
  },
});

export const { fillAllRestaurants, fillTopRestaurants, putCarouselItems } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
