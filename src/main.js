import { FiltersView } from './view/filter.js';
import { SortingView } from './view/sort.js';
import { render } from './framework/render.js';
import { ListPresenter } from './presenter/list-presenter.js';
import { PointsModel } from './model/points-model.js';

import { generateFilter } from './mock/filter.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteHeaderTripControls = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainEvents = siteMainElement.querySelector('.trip-events');

const pointsModel = new PointsModel();
const listPresenter = new ListPresenter({
  listContainer: siteMainEvents, pointsModel
});

const filters = generateFilter(pointsModel.points);

render(new FiltersView({filters}), siteHeaderTripControls);
render(new SortingView(), siteMainEvents);
listPresenter.init();
