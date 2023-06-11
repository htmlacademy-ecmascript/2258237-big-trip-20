import { createElement } from '../render.js';
import { TYPES } from '../const.js';
import { humanizePointDueTime, upFirstLetter } from '../utils.js';


function createEventTypesTemplate (types) {
  return (`
    ${Object.values(types).map((type) =>
      `<div class="event__type-item">
        <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
        <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${upFirstLetter(type)}</label>
      </div>`).join('')}
  `);
}

function createDestinationListTemplate (destinationss) {
  return (`${destinationss.map((item) => `<option value="${item.name}"></option>`).join('')}`);
}

function createEventDetailsTemplate (allOffers, type, checkedOffers, destinations, destination) {
  return (`
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${createOffersTemplate(allOffers, type, checkedOffers)}
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">
        ${destinations.find((object) => object.id === destination).description}
        </p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${createPhotosTemplate(destinations.find((object) => object.id === destination).pictures)}
          </div>
        </div>
      </section>
    </section>
  `);
}

function createOffersTemplate (allOffers, type, checkedOffers) {
  const offersByCurrentType = allOffers.find((item) => item.type === type).offers;

  return (`
    ${offersByCurrentType.map((offer) => `
      <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" type="checkbox"      name="event-offer-${offer.id}" ${isCheckedOffer(offer.id, checkedOffers)}>
      <label class="event__offer-label" for="event-offer-${offer.id}-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`).join('')}
  `);
}

function isCheckedOffer (currentId, checkedOffers) {
  return (checkedOffers.find((offer) => (offer === currentId))) ? 'checked' : '';
}

function createPhotosTemplate (currentCityPhotos) {
  return currentCityPhotos.map((photo) => (`<img class="event__photo" src="${photo.src}" alt="${photo.alt}">`)).join('');
}


function createEditPointTemplate (point, fullOffersList, destinations) {
  const {basePrice, dateFrom, dateTo, destination, type, offers} = point;

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createEventTypesTemplate(TYPES)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinations.find((city) => city.id === destination).name}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${createDestinationListTemplate(destinations)}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizePointDueTime(dateFrom, 'DD/MM/YY HH:mm')}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizePointDueTime(dateTo, 'DD/MM/YY HH:mm')}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      ${createEventDetailsTemplate(fullOffersList, type, offers, destinations, destination)}
    </form>
  </li>`
  );
}


export class EditPointView {
  constructor ({point, offers, destinations}) {
    this.point = point;
    this.offers = offers;
    this.destinations = destinations;
  }

  getTemplate () {
    return createEditPointTemplate(this.point, this.offers, this.destinations);
  }

  getElement () {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement () {
    this.element = null;
  }
}
