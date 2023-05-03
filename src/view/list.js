import { createElement } from '../render.js';

function createNewListTemplate () {
  return (
    `<ul class="trip-events__list">
    </ul>`
  );
}


export class ListView {
  getTemplate () {
    return createNewListTemplate();
  }

  getElement () {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement () {
    this.element = null;
  }
}
