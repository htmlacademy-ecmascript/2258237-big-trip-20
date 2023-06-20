import { PointPresenter } from './point-presenter.js';
import { NewPointPresenter } from './new-point-presenter.js';
import { ListView } from '../view/list.js';
import { SortingView } from '../view/sort.js';
import { NoPointsView } from '../view/no-points.js';
import { LodaingView } from '../view/loading.js';

import { render, RenderPosition, remove } from '../framework/render.js';
import { filter } from '../utils/filter.js';

import { SortType, UpdateType, UserAction, FilterType } from '../const.js';
import { sortPointsByDate, sortPointsByTime, sortPointsByPrice } from '../utils/sort.js';


export class ListPresenter {
  #listContainer = null;
  #pointsModel = null;
  #filterModel = null;
  #sortComponent = null;
  #noPointsComponent = null;
  #loadingComponent = new LodaingView();
  #newPointPresenter = null;

  #tripList = new ListView();

  #currentSortType = SortType.DAY;
  #filterType = FilterType.EVERYTHING;
  #isLoading = true;

  #offers = null;
  #destinations = null;

  #pointPresenters = new Map();

  constructor({listContainer, pointsModel, filterModel, onNewPointDestroy}) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;

    this.#newPointPresenter = new NewPointPresenter({
      pointListContainer: this.#tripList,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy,
    });

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return filteredPoints.sort(sortPointsByDate);
      case SortType.TIME:
        return filteredPoints.sort(sortPointsByTime);
      case SortType.PRICE:
        return filteredPoints.sort(sortPointsByPrice);
    }

    return this.#currentSortType;
  }

  get destinations() {
    return this.#pointsModel.destinations;
  }

  get offers() {
    return this.#pointsModel.offers;
  }

  init() {
    // this.#offers = [...this.#pointsModel.offers];
    // this.#destinations = [...this.#pointsModel.destinations];

    this.#renderPointsList();
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init(this.#offers, this.#destinations);
  }


  #renderPoint(point, offers, destinations) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#tripList,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point, offers, destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }


  #renderNoPoints() {
    this.#noPointsComponent = new NoPointsView({
      filterType: this.#filterType,
    });

    render(this.#noPointsComponent, this.#listContainer);
  }


  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearPointsList();
    this.#renderPointsList();
  };


  #renderSort() {
    this.#sortComponent = new SortingView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#listContainer, RenderPosition.AFTERBEGIN);
  }


  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
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
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderPointsList();
        break;
    }
  };


  #clearPointsList({resetSortType = false} = {}) {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#loadingComponent);

    if (this.#noPointsComponent) {
      remove(this.#noPointsComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#listContainer, RenderPosition.AFTERBEGIN);
  }


  #renderPoints() {
    for (let i = 0; i < this.points.length; i++) {
      this.#renderPoint(this.points[i], this.offers, this.destinations);
    }
  }


  #renderPointsList() {
    render(this.#tripList, this.#listContainer);

    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    this.#renderSort();

    this.#renderPoints();

    if (this.points.length === 0) {
      this.#renderNoPoints();
    }
  }
}
