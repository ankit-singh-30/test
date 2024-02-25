import RestaurantCard from "./RestaurantCard";
import Filter from "../Filter/Filter";

function RestaurantContainer({ restaurants }) {
  return (
    <>
      <div className="mx-56 m-0">
        <div>
          <h2 className="m-0 font-bold text-2xl tracking-[-0.4px]">
            Restaurants with online food delivery in Bangalore
          </h2>
        </div>
      </div>
      <div className="h-4"></div>

      <Filter />

      <div className="mx-52 m-0">
        <div>
          <div className="p-0 grid grid-cols-4 gap-8 my-8 mx-4">
            {restaurants.map((res) => (
              <RestaurantCard key={res.info.id} restaurant={res.info} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantContainer;
