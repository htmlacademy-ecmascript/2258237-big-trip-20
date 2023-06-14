import { render, replace } from '../framework/render.js';
import { EditPointView } from '../view/edit-point.js';
import { TripPointView } from '../view/trip-point.js';

export class PointPresenter {
  #pointListContainer = null;

  #pointComponent = null;
  #pointEditComponent = null;

  #point = null;
  #offers = null;
  #destinations = null;

  constructor({pointListContainer}) {
    this.#pointListContainer = pointListContainer;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    this.#pointComponent = new TripPointView({
      point,
      destinations: this.#destinations,
      onEditClick: this.#handleEditClick,
    });

    this.#pointEditComponent = new EditPointView ({
      point,
      offers: this.#offers,
      destinations: this.#destinations,
      onSubmitForm: this.#handleSubmitForm,
      onCloseForm: this.#handleCloseForm,
    });

    render(this.#pointComponent, this.#pointListContainer.element);
  }

  #replacePointToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeydownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeydownHandler);
  }

  #escKeydownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleSubmitForm = () => {
    this.#replaceFormToPoint();
  };

  #handleCloseForm = () => {
    this.#replaceFormToPoint();
  };
}
