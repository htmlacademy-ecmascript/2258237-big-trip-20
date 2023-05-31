import {getRandomPoint} from '../mock/points.js';
import {getMockDestinations} from '../mock/destinations.js';
import {getMockOffers} from '../mock/offers.js';

const POINTS_COUNT = 3;

export class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoint);
  offers = getMockOffers();
  destinations = getMockDestinations();

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }
}
