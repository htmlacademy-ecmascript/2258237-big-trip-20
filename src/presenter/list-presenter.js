import { PointPresenter } from './point-presenter.js';
import { ListView } from '../view/list.js';
import { NoPointsView } from '../view/no-points.js';
import { render, replace, remove } from '../framework/render.js';


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
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#tripList,
    });

    pointPresenter.init(point, this.#offers, this.#destinations);
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
