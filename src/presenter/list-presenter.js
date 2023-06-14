import { EditPointView } from '../view/edit-point.js';
import { TripPointView } from '../view/trip-point.js';
import { ListView } from '../view/list.js';
import { NoPointsView } from '../view/no-points.js';
import { render, replace } from '../framework/render.js';


export class ListPresenter {
  #listContainer = null;
  #pointsModel = null;

  #tripList = new ListView();
  #noPointsComponent = new NoPointsView();

  #listPoints = null;
  #offers = null;
  #destinations = null;

  constructor({listContainer, pointsModel}) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];
    this.#offers = [...this.#pointsModel.offers];
    this.#destinations = [...this.#pointsModel.destinations];

    this.#renderPointsList();
  }


  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new TripPointView({
      point,
      destinations: this.#destinations,
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new EditPointView({
      point,
      offers: this.#offers,
      destinations: this.#destinations,
      onSubmitForm: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onCloseForm: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#tripList.element);
  }


  #renderNoPoints() {
    render(this.#noPointsComponent, this.#listContainer);
  }


  #renderPointsList() {
    render(this.#tripList, this.#listContainer);

    for (let i = 0; i < this.#listPoints.length; i++) {
      this.#renderPoint(this.#listPoints[i]);
    }

    if (this.#listPoints.length === 0) {
      this.#renderNoPoints();
    }
  }
}
