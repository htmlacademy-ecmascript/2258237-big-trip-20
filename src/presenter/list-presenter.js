import { PointPresenter } from './point-presenter.js';
import { ListView } from '../view/list.js';
import { SortingView } from '../view/sort.js';
import { NoPointsView } from '../view/no-points.js';
import { render, RenderPosition } from '../framework/render.js';
import { updateItem } from '../utils.js';

import { SortType } from '../const.js';
import { sortPointsByDate, sortPointsByTime, sortPointsByPrice } from '../utils/sort.js';


export class ListPresenter {
  #listContainer = null;
  #pointsModel = null;
  #sortComponent = null;

  #tripList = new ListView();
  #noPointsComponent = new NoPointsView();

  #currentSortType = SortType.DAY;

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

    this.#renderSort();
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


  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.DAY:
        this.#listPoints.sort(sortPointsByDate);
        break;
      case SortType.EVENT:
        break;
      case SortType.TIME:
        this.#listPoints.sort(sortPointsByTime);
        break;
      case SortType.PRICE:
        this.#listPoints.sort(sortPointsByPrice);
        break;
      case SortType.OFFERS:
        break;
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPoints();
  };

  #renderSort() {
    this.#sortComponent = new SortingView({
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#listContainer, RenderPosition.BEFOREEND);
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

  #renderPoints() {
    for (let i = 0; i < this.#listPoints.length; i++) {
      this.#renderPoint(this.#listPoints[i]);
    }
  }

  #renderPointsList() {
    render(this.#tripList, this.#listContainer);

    this.#listPoints.sort(sortPointsByDate);

    this.#renderPoints();

    if (this.#listPoints.length === 0) {
      this.#renderNoPoints();
    }
  }
}
