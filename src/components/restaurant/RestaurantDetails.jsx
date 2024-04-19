import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Offer from "../Offer";
import ItemCards from "../ItemCards";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import { getMenuAPIURL } from "../../utils/constant";

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantsDetail] = useState([]);
  const [offers, setOffers] = useState([]);

  const location = useSelector((store) => store.location.location);
  const { lat, lng } = location;

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const data = await fetch(getMenuAPIURL(lat, lng, id));
    const json = await data.json();

    setRestaurantsDetail(json?.data?.cards);
    setOffers(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  };
  return restaurantDetail.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="pt-10 m-auto max-w-[800px]">
      <div className="-mt-4 mb-4 text-[.65rem]">
        <span className="text-gray-400">Home / Banglore / </span>
        <span>{restaurantDetail[0]?.card?.card?.text}</span>
      </div>

      <div className="mx-4">
        <div className="pt-4 mb-4">
          <div className="inline-block w-[648px]">
            <div aria-hidden="true">
              <p className="font-semibold text-lg mb-1">
                {restaurantDetail[0]?.card?.card?.text}
              </p>
              <p className="text-xs text-[#7e808c] mb-1">
                {restaurantDetail[2]?.card?.card?.info?.cuisines.join(", ")}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              {restaurantDetail[2]?.card?.card?.info?.areaName},{" "}
              {restaurantDetail[2]?.card?.card?.info?.sla?.lastMileTravelString}
            </p>
          </div>

          <button className="rounded-lg border shadow-md text-sm text-center p-2 float-right">
            <span className="block pb-2 mb-2 border-b-[1px] text-[#3d9b6d] font-bold">
              ⭐ {restaurantDetail[2]?.card?.card?.info?.avgRating}
            </span>
            <span className="text-xs text-[#8b8d97] font-semibold">
              {restaurantDetail[2]?.card?.card?.info?.totalRatingsString}
            </span>
          </button>
        </div>

        <ul>
          <li className="text-[#7e808c] mb-4 flex text-[13px]">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${restaurantDetail[2]?.card?.card?.info?.feeDetails.icon}`}
              className="mr-2"
            />
            <span className="flex">
              {restaurantDetail[2]?.card?.card?.info?.feeDetails.message}
            </span>
          </li>
        </ul>

        <hr className="border border-dashed mb-4" />

        <div className="mb-4">
          <ul className="text-[#3e4152] text-sm font-semibold">
            <li className="inline-block mr-6">
              <svg
                className="align-bottom mr-2 inline-block"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  r="8.35"
                  transform="matrix(-1 0 0 1 9 9)"
                  stroke="#3E4152"
                  strokeWidth="1.3"
                ></circle>
                <path
                  d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>
                {restaurantDetail[2]?.card?.card?.info?.sla?.slaString
                  ? restaurantDetail[2]?.card?.card?.info?.sla?.slaString
                  : "Service Not Available"}
              </span>
            </li>
            <li className="inline-block">
              <svg
                className="align-bottom mr-2 inline-block"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="8.25"
                  stroke="#3E4152"
                  strokeWidth="1.5"
                ></circle>
                <path
                  d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>
                {restaurantDetail[2]?.card?.card?.info?.costForTwoMessage}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex">
            {offers &&
              offers.map((offer) => (
                <Offer key={offer?.info?.offerIds[0]} offer={offer.info} />
              ))}
          </div>
        </div>
        {/* offer */}
      </div>

      <div>
        <div className="mt-6 ml-4 mr-4 text-[.86rem] font-medium text-[#535665]">
          <div>
            <span className="text-xl">🍃 </span>
            PURE VEG
          </div>
          <div className="border-b-[0.5px] my-6 mx-auto"></div>
        </div>
      </div>

      {/* Recommended */}
      <div className="relative">
        <div className="relative mx-4 mb-16 mt-6">
          <button className="mb-6 w-full flex justify-between pr-4 text-[1.15rem]">
            <h3 className="text-[#3e4152] font-extrabold text-[1rem] inline-block">
              <span aria-hidden="true">
                {
                  restaurantDetail[4]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[2]?.card?.card?.title
                }{" "}
                (
                {
                  restaurantDetail[4]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[2]?.card?.card?.itemCards.length
                }
                )
              </span>
            </h3>
          </button>

          <div>
            {restaurantDetail[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
              (itemCard) => (
                <ItemCards
                  key={itemCard.card?.info?.id}
                  itemCard={itemCard.card?.info}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
