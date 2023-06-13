import dayjs from 'dayjs';
import { humanizePointDueTime } from '../utils.js';

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
    return citiesList[0];
  } else if (newArray.length > 3) {
    return [citiesList[0], ['...'], citiesList[citiesList.length - 1]];
  } else {
    return [citiesList[0], citiesList.find((city) => (city !== citiesList[0] && city !== citiesList[citiesList.length - 1])), citiesList[citiesList.length - 1]];
  }
}

function getMainDates (points) {
  return [humanizePointDueTime(points[0].dateFrom, 'MMMM DD'), humanizePointDueTime(points[points.length - 1].dateTo, 'MMMM DD')];
}


export {getCitiesInOrder, getCitiesList, getMainDates};
