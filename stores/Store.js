'use strict';

export default class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }//

  addListener(listener) {
    this.listeners.push(listener)
    const removeListener = () => this.listeners = this.listeners.filter((l) => l !== listener)
    return removeListener
  }

  setState(state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener.call(this, state);
    }
  }

  getState() {
    return this.state;
  }
}
