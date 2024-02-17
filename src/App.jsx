import { useEffect } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { API_CDN_URL } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  fillAllRestaurants,
  fillTopRestaurants,
  putCarouselItems,
} from "./store/restaurantSlice";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const restaurantItems = useSelector(
    (store) => store.restaurants.restaurantItems
  );

  useEffect(() => {
    restaurantItems.length === 0 && getAllRestaurants();
  }, []);

  const getAllRestaurants = async () => {
    const data = await fetch(API_CDN_URL);
    const json = await data.json();

    dispatch(putCarouselItems(json.data?.cards[0]?.card?.card));
    dispatch(fillTopRestaurants(json.data?.cards[1]?.card?.card));

    dispatch(
      fillAllRestaurants(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
      )
    );
  };

  return (
    <>
      <div className="flex flex-col relative min-w-[1240px] min-h-full pt-20">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
