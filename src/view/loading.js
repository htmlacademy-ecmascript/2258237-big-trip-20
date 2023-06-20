import AbstractView from '../framework/view/abstract-view.js';

function createLodaingPointsTemplate() {
  return (`
    <p class="trip-events__msg">Loading...</p>
  `);
}

export class LodaingView extends AbstractView {
  get template() {
    return createLodaingPointsTemplate();
  }
}
