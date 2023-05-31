import { createElement } from '../render.js';
import { humanizePointDueTime, getOffersByType } from '../utils.js';
import { allOffers } from '../mock/offers.js';


function createTripPointTemplate (point) {
  const {dateFrom, dateTo, basePrice, destination, isFavorite, type, selectedOffers} = point;

  const dateFromDay = humanizePointDueTime(dateFrom, 'days');
  const dateFromMinutes = humanizePointDueTime(dateFrom, 'minutes');
  const dateToMinutes = humanizePointDueTime(dateTo, 'minutes');

  const isFavoriteClassName = (isFavorite) ? 'event__favorite-btn--active' : '';

  function createOffersList (allOffersByType, checkedOffers) {
    let listPoints = '';
    for (let i = 0; i < allOffersByType.length; i++) {
      for (let j = 0; j < checkedOffers.length; j++) {
        if (allOffersByType[i].id === checkedOffers[j]) {
          listPoints += `<li class="event__offer">
                  <span class="event__offer-title">${allOffersByType[i].title}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${allOffersByType[i].price}</span>
                  </li>`;
        }
      }
    }
    return listPoints;
  }

  const currentTypeOffers = getOffersByType(allOffers, type);

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${dateFromDay}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${dateFromMinutes}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${dateToMinutes}</time>
        </p>
        <p class="event__duration">01H 35M????</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOffersList(currentTypeOffers, selectedOffers)}
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


export class TripPointView {
  constructor({point}) {
    this.point = point;
  }

  getTemplate () {
    return createTripPointTemplate(this.point);
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
