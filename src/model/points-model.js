import {getMockPoints} from '../mock/points.js';
import {getMockDestinations} from '../mock/destinations.js';
import {getMockOffers} from '../mock/offers.js';
// import {POINTS_COUNT} from '../const.js';

export class PointsModel {
  // points = Array.from({length: POINTS_COUNT}, getRandomPoint);
  points = getMockPoints();

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
