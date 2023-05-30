import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    basePrice: 1100,
    dateFrom: '2019-07-10T22:15',
    dateTo: '2019-07-10T23:35',
    destination: 'Moscow',
    isFavorite: true,
    selectedOffers: [1, 2],
    type: 'taxi'
  }, {
    basePrice: 800,
    dateFrom: '2019-08-11T9:15',
    dateTo: '2019-08-16T13:35',
    destination: 'Anapa',
    isFavorite: false,
    selectedOffers: [2],
    type: 'drive'
  }
];


function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
