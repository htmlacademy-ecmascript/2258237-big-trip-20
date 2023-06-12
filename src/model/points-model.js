import {getMockPoints} from '../mock/points.js';
import {getMockDestinations} from '../mock/destinations.js';
import {getMockOffers} from '../mock/offers.js';

export class PointsModel {
  #points = getMockPoints();
  #offers = getMockOffers();
  #destinations = getMockDestinations();

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
