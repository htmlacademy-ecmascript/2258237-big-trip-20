import AbstractView from '../framework/view/abstract-view.js';

function createNewInfoPriceTemplate(totalPrice) {
  return (`
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
    </p>
  `);
}


export class InfoPriceView extends AbstractView {
  #totalPrice = null;

  constructor(price) {
    super();
    this.#totalPrice = price;
  }

  get template() {
    return createNewInfoPriceTemplate(this.#totalPrice);
  }
}
