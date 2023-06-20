import { NewPointButtonView } from './view/new-point-button.js';
import { ListPresenter } from './presenter/list-presenter.js';
import { TripInfoPresenter } from './presenter/trip-info-presenter.js';
import { FilterPresenter } from './presenter/filter-presenter.js';
import { PointsModel } from './model/points-model.js';
import { FilterModel } from './model/filter-model.js';
import { render } from './framework/render.js';
import { RenderPosition } from './framework/render.js';
import PointsApiService from './points-api-service.js';

const AUTHORIZATION = 'Basic k67jSr2gbDSh3sueghWE';
const END_POINT = 'https://20.ecmascript.pages.academy/big-trip';


const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteHeaderInfo = document.querySelector('.trip-main');
const siteHeaderTripControls = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainEvents = siteMainElement.querySelector('.trip-events');


const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION),
});
const tripInfoPresenter = new TripInfoPresenter({
  tripInfoContainer: siteHeaderInfo,
  pointsModel,
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
  onNewPointDestroy: handleNewPointFormClose,
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick,
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  listPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(newPointButtonComponent, siteHeaderInfo, RenderPosition.BEFOREEND);


tripInfoPresenter.init();
filterPresenter.init();
listPresenter.init();
pointsModel.init();
