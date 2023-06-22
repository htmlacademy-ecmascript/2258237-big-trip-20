import dayjs from 'dayjs';
import { humanizePointDueTime } from '../utils.js';
import { getOffersByType } from '../utils.js';

function getPointsInOrder (points) {
  return points.sort((a, b) => dayjs(a.dateFrom) > dayjs(b.dateFrom) ? 1 : -1);
}

function getCitiesInOrder (points, destinations) {
  return getPointsInOrder(points).map((point) => point.destination).map((currentId) => destinations.find((element) => element.id === currentId).name);
}

function getCitiesList (citiesList) {
  const newSet = new Set(citiesList);
  const newArray = Array.from(newSet);

  if (newArray.length === 1) {
    return [citiesList[0]];
  } else if (newArray.length === 2) {
    return [citiesList[0], citiesList[citiesList.length - 1]];
  } else if (newArray.length > 3) {
    return [citiesList[0], ['...'], citiesList[citiesList.length - 1]];
  } else {
    return [citiesList[0], citiesList.find((city) => (city !== citiesList[0] && city !== citiesList[citiesList.length - 1])), citiesList[citiesList.length - 1]];
  }
}

function getMainDates (points) {
  return (points.length > 0) ? [humanizePointDueTime(points[0].dateFrom, 'MMMM DD'), humanizePointDueTime(points[points.length - 1].dateTo, 'MMMM DD')] : '';
}

function getTotalTripPrice (points, offers) {
  if (points.length < 1) {
    return '';
  }
  const basePrices = points.map((point) => point.basePrice).reduce((total, current) => total + current);
  const extraOffers = points.map((point) => getOffersByType(offers, point.type));

  let offersPrice = 0;

  for (const point of points) {
    point.offers.map((currentOffer) => extraOffers[points.findIndex((pointes) => pointes === point)].find((offer) => offer.id === currentOffer)).forEach((item) => {
      offersPrice += item.price;
    });
  }

  return basePrices + offersPrice;
}


export {getCitiesInOrder, getCitiesList, getMainDates, getTotalTripPrice};
