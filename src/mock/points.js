// import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    basePrice: 1100,
    dateFrom: '2019-07-10T22:15',
    dateTo: '2019-07-10T23:35',
    destination: '1',
    isFavorite: true,
    offers: [1, 2],
    type: 'taxi'
  }, {
    basePrice: 800,
    dateFrom: '2019-08-11T9:15',
    dateTo: '2019-08-16T13:35',
    destination: '2',
    isFavorite: false,
    offers: [3],
    type: 'drive'
  }, {
    basePrice: 5355,
    dateFrom: '2019-03-15T12:15',
    dateTo: '2019-03-16T02:35',
    destination: '1',
    isFavorite: false,
    offers: [1],
    type: 'flight'
  }, {
    basePrice: 1300,
    dateFrom: '2019-05-15T10:15',
    dateTo: '2019-05-16T12:35',
    destination: '3',
    isFavorite: true,
    offers: [],
    type: 'flight'
  }, {
    basePrice: 25,
    dateFrom: '2019-05-15T10:15',
    dateTo: '2019-05-15T10:47',
    destination: '4',
    isFavorite: false,
    offers: [1, 2, 3],
    type: 'bus'
  }, {
    basePrice: 190,
    dateFrom: '2019-05-13T10:55',
    dateTo: '2019-05-15T10:17',
    destination: '1',
    isFavorite: true,
    offers: [2, 3],
    type: 'ship'
  }, {
    basePrice: 90,
    dateFrom: '2019-06-13T11:34',
    dateTo: '2019-06-13T13:41',
    destination: '2',
    isFavorite: true,
    offers: [2],
    type: 'train'
  }
];


// function getRandomPoint() {
//   return getRandomArrayElement(mockPoints);
// }

function getMockPoints() {
  return mockPoints;
}

export {getMockPoints};
