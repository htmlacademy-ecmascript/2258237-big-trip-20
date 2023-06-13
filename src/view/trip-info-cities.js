import AbstractView from '../framework/view/abstract-view.js';

function createNewInfoCitiesTemplate() {
  return (`
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
  `);
}


export class InfoCitiesView extends AbstractView {
  get template() {
    return createNewInfoCitiesTemplate();
  }
}
