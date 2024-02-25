import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantAPI } from "../utils/constant";

import {
  fillAllRestaurants,
  fillTopRestaurants,
  putCarouselItems,
} from "../store/restaurantSlice";

const useRestaurant = () => {
  const dispatch = useDispatch();
  const location = useSelector((store) => store.location.location);

  const restaurantItems = useSelector(
    (store) => store.restaurants.restaurantItems
  );

  const { lat, lng } = location;

  useEffect(() => {
    restaurantItems.length === 0 && getAllRestaurants();
  }, [location]);

  // function to fetch data
  const getAllRestaurants = async () => {
    const data = await fetch(getAllRestaurantAPI(lat, lng));
    const json = await data.json();

    const restaurantData =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;

    if (restaurantData) {
      dispatch(putCarouselItems(json.data?.cards[0]?.card?.card));
      dispatch(fillTopRestaurants(json.data?.cards[1]?.card?.card));
      dispatch(fillAllRestaurants(restaurantData));
    } else {
      dispatch(putCarouselItems([]));
      dispatch(fillTopRestaurants([]));
      dispatch(fillAllRestaurants([]));
    }
  };
};

export default useRestaurant;
