import { remove, render, RenderPosition } from '../framework/render.js';
import { EditPointView } from '../view/edit-point.js';
// import { nanoid } from 'nanoid';
import { UserAction, UpdateType } from '../const.js';
import dayjs from 'dayjs';


export class NewPointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;

  #offers = null;
  #destinations = null;

  #pointEditComponent = null;

  constructor({pointListContainer, onDataChange, onDestroy}) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init(offers, destinations) {
    this.#offers = offers;
    this.#destinations = destinations;
    if (this.#pointEditComponent !== null) {
      return;
    }

    this.#pointEditComponent = new EditPointView({
      point: {
        basePrice: '',
        dateFrom: dayjs().format(),
        dateTo: dayjs().format(),
        isFavorite: false,
        offers: [],
        type: 'flight'
      },
      offers,
      destinations,
      onSubmitForm: this.#handleSubmitForm,
      onDeleteForm: this.#handleDeleteClick,
      creatingPoint: true,
    });

    render(this.#pointEditComponent, this.#pointListContainer.element, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#pointEditComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#pointEditComponent);
    this.#pointEditComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  setSaving() {
    this.#pointEditComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#pointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#pointEditComponent.shake(resetFormState);
  }

  #handleSubmitForm = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point,
    );
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
