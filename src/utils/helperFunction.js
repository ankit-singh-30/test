// to get the location details from the local storage and set it in the redux store

export const getLocationDetails = () => {
  const locationDetails = {
    name: localStorage.getItem("location_name") || "Banglore, Karnatka, India",
    lat: localStorage.getItem("location_lat") || 12.9715987,
    lng: localStorage.getItem("location_lng") || 77.5945627,
  };

  return locationDetails;
};

// to update the location details of the user in the local storage
export const updateLocalStorageLocation = ({ name, lat, lng }) => {
  localStorage.clear();
  localStorage.setItem("location_name", name);
  localStorage.setItem("location_lat", lat);
  localStorage.setItem("location_lng", lng);
};
