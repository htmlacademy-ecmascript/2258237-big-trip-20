import { ListPresenter } from './presenter/list-presenter.js';
import { TripInfoPresenter } from './presenter/trip-info-presenter.js';
import { FilterPresenter } from './presenter/filter-presenter.js';
import { PointsModel } from './model/points-model.js';
import { FilterModel } from './model/filter-model.js';


const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteHeaderInfo = document.querySelector('.trip-main');
const siteHeaderTripControls = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainEvents = siteMainElement.querySelector('.trip-events');


const pointsModel = new PointsModel();
const tripInfoPresenter = new TripInfoPresenter({
  tripInfoContainer: siteHeaderInfo, pointsModel
});
const filterModel = new FilterModel();
const filterPresenter = new FilterPresenter({
  filterContainer: siteHeaderTripControls,
  filterModel,
  pointsModel,
});
const listPresenter = new ListPresenter({
  listContainer: siteMainEvents,
  pointsModel,
  filterModel,
});


tripInfoPresenter.init();
filterPresenter.init();
listPresenter.init();
