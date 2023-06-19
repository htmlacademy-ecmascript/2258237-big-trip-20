import { TYPES } from '../const.js';
import { humanizePointDueTime, upFirstLetter } from '../utils.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import dayjs from 'dayjs';
import { EditingType } from '../const.js';

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


function createOffersSectionTemplate (allOffers, type, checkedOffers) {
  return (`
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${createOffersTemplate(allOffers, type, checkedOffers)}
      </div>
    </section>
  `);
}

function createDestinationSectionTemplate (destinations, destination) {
  if (destination === undefined) {
    return '';
  }

  return (`
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
  `);
}


function createEventDetailsTemplate (allOffers, type, checkedOffers, destinations, destination) {
  return (`
    <section class="event__details">
      ${createOffersSectionTemplate(allOffers, type, checkedOffers)}
      ${createDestinationSectionTemplate(destinations, destination)}
    </section>
  `);
}

function createOffersTemplate (allOffers, type, checkedOffers) {
  const offersByCurrentType = (type === undefined) ? [] : allOffers.find((item) => item.type === type).offers;

  return (`
    ${offersByCurrentType.map((offer) => `
      <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" type="checkbox" name="event-offer-${offer.id}" ${isCheckedOffer(offer.id, checkedOffers)}>
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


function createEditPointTemplate (point, fullOffersList, destinations, editingType) {
  const {basePrice, dateFrom, dateTo, destination, type, offers} = point;
  const deleteButton = (editingType === EditingType.CREATING) ? 'Delete' : 'Cancel';

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
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${(point.destination === undefined) ? '' : destinations.find((city) => city.id === destination).name}" list="destination-list-1">
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
        <button class="event__reset-btn" type="reset">${deleteButton}</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      ${createEventDetailsTemplate(fullOffersList, type, offers, destinations, destination)}
    </form>
  </li>`
  );
}


export class EditPointView extends AbstractStatefulView {
  #offers = null;
  #destinations = null;
  #handleSubmitForm = null;
  #handleCloseForm = null;
  #handleDeleteClick = null;
  #dateFromPicker = null;
  #dateToPicker = null;

  #editingType = null;

  constructor ({point, offers, destinations, onSubmitForm, onCloseForm, onDeleteForm, creatingPoint = false}) {
    super();
    this._setState(EditPointView.parsePointToState(point));
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleSubmitForm = onSubmitForm;
    this.#handleCloseForm = onCloseForm;
    this.#handleDeleteClick = onDeleteForm;

    this.#editingType = (creatingPoint) ? EditingType.EDITING : EditingType.CREATING;

    this._restoreHandlers();
  }

  removeElement() {
    super.removeElement();

    if (this.#dateFromPicker) {
      this.#dateFromPicker.destroy();
      this.#dateFromPicker = null;
    }

    if (this.#dateToPicker) {
      this.#dateToPicker.destroy();
      this.#dateToPicker = null;
    }
  }

  reset(point) {
    this.updateElement(
      EditPointView.parsePointToState(point),
    );
  }

  _restoreHandlers() {
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#submitFormHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeFormHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#deleteFormHandler);
    this.element.querySelectorAll('.event__type-input').forEach((elem) => elem.addEventListener('click', this.#changeTypeHandler));
    this.element.querySelector('.event__input--destination').addEventListener('input', this.#changeCityHandler);
    this.element.querySelectorAll('.event__offer-checkbox').forEach((elem) => elem.addEventListener('click', this.#changeOfferesHandler));

    this.#setDateFrompicker();
    this.#setDateTopicker();
  }

  get template() {
    return createEditPointTemplate(this._state, this.#offers, this.#destinations, this.#editingType);
  }

  #submitFormHandler = (evt) => {
    evt.preventDefault();
    this.#handleSubmitForm(EditPointView.parseStateToPoint(this._state));
  };

  #closeFormHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseForm();
  };

  #deleteFormHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(EditPointView.parseStateToPoint(this._state));
  };

  #changeTypeHandler = (evt) => {
    this.updateElement({
      type: `${evt.target.value}`,
      offers: [],
    });
  };

  #getCityIdByText = (destinations, inp) => (destinations.find((destination) => destination.name === inp)) ? destinations.find((destination) => destination.name === inp).id : null;

  #changeCityHandler = (evt) => {
    evt.preventDefault();
    if (this.#getCityIdByText(this.#destinations, evt.target.value) !== null) {
      this.updateElement({
        destination: `${this.#getCityIdByText(this.#destinations, evt.target.value)}`,
      });
    }
  };

  #changeOfferesHandler = (evt) => {
    if (evt.target.checked) {
      const refreshedOffers = [...this._state.offers];
      refreshedOffers.push(Number(evt.target.name.slice(12)));

      this.updateElement({
        offers: refreshedOffers,
      });
    } else {
      const refreshedOffers = [...this._state.offers];
      refreshedOffers.splice(this._state.offers.indexOf(Number(evt.target.name.slice(12))), 1);

      this.updateElement({
        offers: refreshedOffers,
      });
    }
  };

  #dueDateFromChangeHandler = ([userDate]) => {
    this.updateElement({
      dateFrom: dayjs(userDate).format('YYYY-MM-DDTHH:mm'),
    });
  };

  #setDateFrompicker() {
    this.#dateFromPicker = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        enableTime: true,
        dateFormat: 'd\\/m\\/y\\ H\\:i',
        maxDate: dayjs(this._state.dateTo).format('DD-MM-YY HH:mm'),
        defaultDate: dayjs(this._state.dateFrom).format('DD-MM-YY HH:mm'),
        onChange: this.#dueDateFromChangeHandler,
      },
    );
  }

  #dueDateToChangeHandler = ([userDate]) => {
    this.updateElement({
      dateTo: dayjs(userDate).format('YYYY-MM-DDTHH:mm'),
    });
  };

  #setDateTopicker() {
    this.#dateToPicker = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        enableTime: true,
        dateFormat: 'd\\/m\\/y\\ H\\:i',
        minDate: dayjs(this._state.dateFrom).format('DD-MM-YY HH:mm'),
        defaultDate: dayjs(this._state.dateTo).format('DD-MM-YY HH:mm'),
        onChange: this.#dueDateToChangeHandler,
      },
    );
  }


  static parsePointToState(point) {
    return {...point};
  }

  static parseStateToPoint(state) {
    const point = {...state};
    return point;
  }
}
