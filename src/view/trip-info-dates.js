import AbstractView from '../framework/view/abstract-view.js';

function createNewInfoDatesTemplate(mainDates) {
  return (`
    <p class="trip-info__dates">${mainDates[0]}&nbsp;&mdash;&nbsp;${mainDates[1]}</p>
  `);
}


export class InfoDatesView extends AbstractView {
  #mainDates = null;

  constructor(dates) {
    super();
    this.#mainDates = dates;
  }

  get template() {
    return createNewInfoDatesTemplate(this.#mainDates);
  }
}
