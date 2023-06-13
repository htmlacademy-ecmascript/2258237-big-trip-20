import AbstractView from '../framework/view/abstract-view.js';

function createNewInfoDatesTemplate() {
  return (`
    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
  `);
}


export class InfoDatesView extends AbstractView {
  get template() {
    return createNewInfoDatesTemplate();
  }
}
