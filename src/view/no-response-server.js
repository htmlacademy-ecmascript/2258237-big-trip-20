import AbstractView from '../framework/view/abstract-view.js';

function createNoResponseServerView() {
  return (`
    <p>Serer is not response</p>
  `);
}

export class NoResponseServerView extends AbstractView {
  get template() {
    return createNoResponseServerView();
  }
}
