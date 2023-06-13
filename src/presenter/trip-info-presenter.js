import { RenderPosition, render } from '../framework/render.js';
import { InfoContainerView } from '../view/trip-info.js';
import { InfoCitiesView } from '../view/trip-info-cities.js';
import { InfoDatesView } from '../view/trip-info-dates.js';
import { InfoPriceView } from '../view/trip-info-price.js';

import { getCitiesInOrder, getCitiesList, getMainDates } from '../utils/extra-info.js';

export class TripInfoPresenter {
  #tripInfoContainer = null;
  #pointsModel = null;

  #tripInfoList = new InfoContainerView();

  #listPoints = null;
  #offers = null;
  #destinations = null;

  constructor({tripInfoContainer, pointsModel}) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#pointsModel = pointsModel;
  }


  init() {
    this.#listPoints = [...this.#pointsModel.points];
    this.#offers = [...this.#pointsModel.offers];
    this.#destinations = [...this.#pointsModel.destinations];

    this.#renderInfoContainer();
  }


  #renderCities(points, destinations) {
    const citiesInTripOrder = getCitiesInOrder(points, destinations);
    const citiesList = getCitiesList(citiesInTripOrder);

    const citiesComponent = new InfoCitiesView(citiesList);
    render(citiesComponent, this.#tripInfoList.element.querySelector('.trip-info__main'));
  }


  #renderDates(points) {
    const mainDates = getMainDates(points);
    console.log(mainDates);

    const datesComponent = new InfoDatesView(mainDates);
    render(datesComponent, this.#tripInfoList.element.querySelector('.trip-info__main'));
  }


  #renderPrice() {
    const priceComponent = new InfoPriceView();
    render(priceComponent, this.#tripInfoList.element);
  }


  #renderInfoContainer() {
    render(this.#tripInfoList, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);

    this.#renderCities(this.#listPoints, this.#destinations);
    this.#renderDates(this.#listPoints);
    this.#renderPrice();
  }
}
