import { PointPresenter } from './point-presenter.js';
import { ListView } from '../view/list.js';
import { SortingView } from '../view/sort.js';
import { NoPointsView } from '../view/no-points.js';
import { render, RenderPosition, remove } from '../framework/render.js';

import { SortType, UpdateType, UserAction } from '../const.js';
import { sortPointsByDate, sortPointsByTime, sortPointsByPrice } from '../utils/sort.js';


export class ListPresenter {
  #listContainer = null;
  #pointsModel = null;
  #sortComponent = null;

  #tripList = new ListView();
  #noPointsComponent = new NoPointsView();

  #currentSortType = SortType.DAY;

  // #listPoints = null;
  #offers = null;
  #destinations = null;

  #pointPresenters = new Map();

  constructor({listContainer, pointsModel}) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    switch (this.#currentSortType) {
      case SortType.DAY:
        return this.#pointsModel.points.sort(sortPointsByDate);
      case SortType.TIME:
        return this.#pointsModel.points.sort(sortPointsByTime);
      case SortType.PRICE:
        return this.#pointsModel.points.sort(sortPointsByPrice);
    }
  }

  init() {
    this.#offers = [...this.#pointsModel.offers];
    this.#destinations = [...this.#pointsModel.destinations];

    this.#renderPointsList();
  }


  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#tripList,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point, this.#offers, this.#destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }


  #renderNoPoints() {
    render(this.#noPointsComponent, this.#listContainer);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearPointList();
    this.#renderPoints();
  };

  #renderSort() {
    this.#sortComponent = new SortingView({
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#listContainer, RenderPosition.AFTERBEGIN);
  }


  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }


  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };


  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data, this.#offers, this.#destinations);
        break;
      case UpdateType.MINOR:
        this.#clearPointsList();
        this.#renderPointsList();
        break;
      case UpdateType.MAJOR:
        this.#clearPointsList();
        this.#renderPointsList();
        break;
    }
  };


  #clearPointsList({resetSortType = false} = {}) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#noPointsComponent);

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }


  #renderPoints() {
    for (let i = 0; i < this.points.length; i++) {
      this.#renderPoint(this.points[i]);
    }
  }


  #renderPointsList() {
    render(this.#tripList, this.#listContainer);

    this.#renderSort();

    this.#renderPoints();

    if (this.points.length === 0) {
      this.#renderNoPoints();
    }
  }
}
