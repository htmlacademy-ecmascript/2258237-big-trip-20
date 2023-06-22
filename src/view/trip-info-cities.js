import AbstractView from '../framework/view/abstract-view.js';

function createNewInfoCitiesTemplate(citiesList) {

  function getCitiesListTemplate(cities) {
    if (cities[0] === undefined) {
      return '';
    }

    if (cities.length === 1) {
      return cities[0];
    } else if (cities.length === 2) {
      return `${cities[0]} &mdash; ${cities[1]}`;
    } else {
      return `${cities[0]} &mdash; ${cities[1]} &mdash; ${cities[2]}`;
    }
  }

  return (`
    <h1 class="trip-info__title">${getCitiesListTemplate(citiesList)}</h1>
  `);
}


export class InfoCitiesView extends AbstractView {
  #citiesList = null;

  constructor(citiesList) {
    super();
    this.#citiesList = citiesList;
  }

  get template() {
    return createNewInfoCitiesTemplate(this.#citiesList);
  }
}
