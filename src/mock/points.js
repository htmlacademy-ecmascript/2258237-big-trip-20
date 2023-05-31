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
    selectedOffers: [3],
    type: 'drive'
  }, {
    basePrice: 5355,
    dateFrom: '2019-03-15T12:15',
    dateTo: '2019-03-16T02:35',
    destination: 'Jeneva',
    isFavorite: false,
    selectedOffers: [1],
    type: 'flight'
  }, {
    basePrice: 1300,
    dateFrom: '2019-05-15T10:15',
    dateTo: '2019-05-16T12:35',
    destination: 'Adler',
    isFavorite: true,
    selectedOffers: [],
    type: 'flight'
  }
];


function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
