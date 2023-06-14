import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplate ({type, isEnable}) {

  function isActive(isEnabled) {
    return (isEnabled) ? '' : 'disabled';
  }

  return (`
    <div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${isActive(isEnable)}>
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
    </div>
  `);
}

function createNewFiltersTemplate (filterItems) {
  return (`
    <form class="trip-filters" action="#" method="get">
      ${filterItems.map((filter) => createFilterItemTemplate(filter)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}


export class FiltersView extends AbstractView {
  #filters = null;

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createNewFiltersTemplate(this.#filters);
  }
}
