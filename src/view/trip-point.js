import AbstractView from '../framework/view/abstract-view.js';
import { humanizePointDueTime, getOffersByType, getPointDuration } from '../utils.js';
import { allOffers } from '../mock/offers.js';


function createTripPointTemplate (point, destinations) {
  const {dateFrom, dateTo, basePrice, destination, isFavorite, type, offers} = point;

  const dateFromDay = humanizePointDueTime(dateFrom, 'MMMM DD');
  const dateFromMinutes = humanizePointDueTime(dateFrom, 'HH:mm');
  const dateToMinutes = humanizePointDueTime(dateTo, 'HH:mm');

  const isFavoriteClassName = (isFavorite) ? 'event__favorite-btn--active' : '';

  function createOffersList (allOffersByType, checkedOffers) {
    return checkedOffers.map((currentOfferId) => {
      const currentOffer = allOffersByType.find((offer) => offer.id === currentOfferId);
      return (`
        <li class="event__offer">
        <span class="event__offer-title">${currentOffer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${currentOffer.price}</span>
        </li>
      `);
    }).join('');
  }

  const currentTypeOffers = getOffersByType(allOffers, type);

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${dateFromDay}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destinations.find((city) => city.id === destination).name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${dateFromMinutes}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${dateToMinutes}</time>
        </p>
        <p class="event__duration">${getPointDuration(dateFrom, dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOffersList(currentTypeOffers, offers)}
      </ul>
      <button class="event__favorite-btn  ${isFavoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}


export class TripPointView extends AbstractView {
  #point = null;
  #destinations = null;
  #handleEditClick = null;

  constructor({point, destinations, onEditClick}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createTripPointTemplate(this.#point, this.#destinations);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
