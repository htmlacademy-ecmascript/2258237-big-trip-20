import AbstractView from '../framework/view/abstract-view.js';

function createNewInfoContainerTemplate() {
  return (`
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
      </div>
    </section>
  `);
}


export class InfoContainerView extends AbstractView {
  get template() {
    return createNewInfoContainerTemplate();
  }
}
