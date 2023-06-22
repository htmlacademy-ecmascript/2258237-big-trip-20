import { RenderPosition, render, replace, remove } from '../framework/render.js';
import { InfoContainerView } from '../view/trip-info.js';
import { InfoCitiesView } from '../view/trip-info-cities.js';
import { InfoDatesView } from '../view/trip-info-dates.js';
import { InfoPriceView } from '../view/trip-info-price.js';

import { getCitiesInOrder, getCitiesList, getMainDates, getTotalTripPrice } from '../utils/extra-info.js';

export class TripInfoPresenter {
  #tripInfoContainer = null;
  #pointsModel = null;

  #tripInfoList = new InfoContainerView();

  #listPoints = null;
  #offers = null;
  #destinations = null;

  #citiesComponent = null;
  #datesComponent = null;
  #priceComponent = null;

  constructor({tripInfoContainer, pointsModel}) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }


  init() {
    this.#listPoints = [...this.#pointsModel.points];
    this.#offers = [...this.#pointsModel.offers];
    this.#destinations = [...this.#pointsModel.destinations];

    const prevCitiesComponent = this.#citiesComponent;
    const prevDatesComponent = this.#datesComponent;
    const prevPriceComponent = this.#priceComponent;

    this.#citiesComponent = new InfoCitiesView(getCitiesList(getCitiesInOrder(this.#listPoints, this.#destinations)));
    this.#datesComponent = new InfoDatesView(getMainDates(this.#listPoints));
    this.#priceComponent = new InfoPriceView(getTotalTripPrice(this.#listPoints, this.#offers));

    render(this.#tripInfoList, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);

    if (prevCitiesComponent === null) {
      render(this.#citiesComponent, this.#tripInfoList.element.querySelector('.trip-info__main'));
      render(this.#datesComponent, this.#tripInfoList.element.querySelector('.trip-info__main'));
      render(this.#priceComponent, this.#tripInfoList.element);
      return;
    }

    replace(this.#citiesComponent, prevCitiesComponent);
    replace(this.#datesComponent, prevDatesComponent);
    replace(this.#priceComponent, prevPriceComponent);
    remove(prevCitiesComponent);
    remove(prevDatesComponent);
    remove(prevPriceComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };
}
