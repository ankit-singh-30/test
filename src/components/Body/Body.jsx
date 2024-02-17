import { useSelector } from "react-redux";
import BannerCard from "../BannerCard";
import TopResturant from "../restaurant/TopResturant";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import RestaurantContainer from "../restaurant/RestaurantContainer";

function Body() {
  const carouselItems = useSelector(
    (store) => store.restaurants?.carouselItems
  );

  const restaurantItems = useSelector(
    (store) => store.restaurants?.restaurantItems
  );

  return restaurantItems.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex-grow">
      <div className="h-full">
        <div>
          <main className="flex w-full h-full flex-col bg-white">
            {carouselItems.card?.card?.id !== "whats_on_your_mind" && (
              <>
                <BannerCard banners={carouselItems} />
                <hr className="border border-solid border-[#F0F0F5] my-8 mx-56" />
              </>
            )}

            <TopResturant />
            <RestaurantContainer restaurants={restaurantItems} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Body;
