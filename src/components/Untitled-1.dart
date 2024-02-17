useEffect(() => {
    restaurantItems.length === 0 && getAllRestaurants();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
  }

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
  










const fetchRestaurantData = async () => {
  const data = await fetch(API_CDN_URL);
  const json = await data.json();

  setRestaurantsData(
    json.data?.cards[3]?.card?.card?.gridElements
      ? json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
      : json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
  );
};

useEffect(() => {
  fetchRestaurantData();
}, []);