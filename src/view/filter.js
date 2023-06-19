import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplate (filter, currentFilterType) {
  const {type, isEnable} = filter;

  function isActive(isEnabled) {
    return (isEnabled) ? '' : 'disabled';
  }

  return (`
    <div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${isActive(isEnable)} ${type === currentFilterType ? 'checked' : ''}>
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


export default class FiltersView extends AbstractView {
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createNewFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
