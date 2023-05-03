import { CreatePointView } from '../view/add-new-point.js';
import { EditPointView } from '../view/edit-point.js';
import { TripPointView } from '../view/trip-point.js';
import { ListView } from '../view/list.js';

import { render } from '../render.js';


export class ListPresenter {
  tripList = new ListView();

  constructor ({listContainer}) {
    this.listContainer = listContainer;
  }

  init () {
    render(this.tripList, this.listContainer);
    render(new CreatePointView(), this.tripList.getElement());
    render(new EditPointView(), this.tripList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.tripList.getElement());
    }
  }
}
