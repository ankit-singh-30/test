export const BANNER_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const IMAGE_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const API_CDN_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const getAllRestaurantAPI = (lat, lng) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

export const getMenuAPIURL = (lat, lng, resId, slug) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`;

export const getCurrentLocationAPI = (lat, lng) =>
  `https://us1.locationiq.com/v1/reverse?key=pk.52edb4951867ed3df1b858c24daeae0f&lat=${lat}&lon=${lng}&format=json`;
