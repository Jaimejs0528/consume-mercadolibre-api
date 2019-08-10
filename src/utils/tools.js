
export const getDiscount = (currentPrice, originalPrice) => {
  Math.floor(100 - currentPrice * 100 / originalPrice);
};

export const getLocation = (locationObject) => {
  const city = locationObject.city.name || '';
  const country = locationObject.country.name || '';
  const location = `${city}, ${country}`;
  return location === '' ? 'No Location' : location;
};

export default {
  getDiscount,
  getLocation,
};
