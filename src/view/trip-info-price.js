import AbstractView from '../framework/view/abstract-view.js';

function createNewInfoPriceTemplate() {
  return (`
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">Null</span>
    </p>
  `);
}


export class InfoPriceView extends AbstractView {
  get template() {
    return createNewInfoPriceTemplate();
  }
}
