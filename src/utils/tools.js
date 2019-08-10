
export const getDiscount = (currentPrice, originalPrice) => {
  const temporal = originalPrice || currentPrice;
  return Math.floor(100 - currentPrice * 100 / temporal);
};

export const getLocation = (locationObject) => {
  const city = locationObject.city.name || '';
  const country = locationObject.country.name || '';
  const location = `${city}, ${country}`;
  return location === '' ? 'No Location' : location;
};

export const getTotalPages = paging => Math.floor(paging.total / paging.limit) || 1;

export default {
  getDiscount,
  getLocation,
  getTotalPages,
};
