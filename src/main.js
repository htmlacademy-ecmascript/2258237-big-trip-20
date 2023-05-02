import { NewFiltersView } from './view/filter.js';
import { NewSortingView } from './view/sort.js';
import { render } from './render.js';
import { ListPresenter } from './presenter/list-presenter.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteHeaderTripControls = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainEvents = siteMainElement.querySelector('.trip-events');

const listPresenter = new ListPresenter({listContainer: siteMainEvents});

render(new NewFiltersView(), siteHeaderTripControls);
render(new NewSortingView(), siteMainEvents);
listPresenter.init();
