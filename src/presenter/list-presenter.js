import { PointPresenter } from './point-presenter.js';
import { ListView } from '../view/list.js';
import { NoPointsView } from '../view/no-points.js';
import { render } from '../framework/render.js';
import { updateItem } from '../utils.js';


export class ListPresenter {
  #listContainer = null;
  #pointsModel = null;

  #tripList = new ListView();
  #noPointsComponent = new NoPointsView();

  #listPoints = null;
  #offers = null;
  #destinations = null;

  #pointPresenters = new Map();

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
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point, this.#offers, this.#destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }


  #renderNoPoints() {
    render(this.#noPointsComponent, this.#listContainer);
  }


  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }


  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };


  #handlePointChange = (updatedPoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#offers, this.#destinations);
  };


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
