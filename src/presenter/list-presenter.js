import { NewCreatePointView } from '../view/add-new-point.js';
import { NewEditPointView } from '../view/edit-point.js';
import { NewTripPointView } from '../view/trip-point.js';
import { NewListView } from '../view/list.js';

import { render } from '../render.js';


export class ListPresenter {
  tripList = new NewListView();

  constructor ({listContainer}) {
    this.listContainer = listContainer;
  }

  init () {
    render(this.tripList, this.listContainer);
    render(new NewCreatePointView(), this.tripList.getElement());
    render(new NewEditPointView(), this.tripList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewTripPointView(), this.tripList.getElement());
    }
  }
}
