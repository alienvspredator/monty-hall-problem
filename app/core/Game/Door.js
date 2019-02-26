/**
 * @enum {ERROR_MESSAGES} Error messages
 */
const ERROR_MESSAGES = {
  DOOR: {
    ALREADY_OPENED: 'Door is already opened.',
    CANNOT_CLOSE_OPENED: 'Opened door cannot be closed.',
    IS_CLOSED: 'Door is not opened.',
  },
};

/**
 * Door of Monty Hall Game
 */
class Door {
  /**
   * @param {Object} params Parameters to init door
   * @param {Boolean} params.win Is door win
   */
  constructor({win = false} = {}) {
    this._win = win;
    this._opened = false;
  }

  /** Door state */
  get opened() {
    return this._opened;
  }

  /** @param {Boolean} state */
  set opened(state) {
    if (this.opened) {
      throw new Error(ERROR_MESSAGES.DOOR.ALREADY_OPENED);
    }

    if (!state) {
      throw new Error(ERROR_MESSAGES.DOOR.CANNOT_CLOSE_OPENED);
    }

    this._opened = state;
  }

  /**
   * Is door win.
   * If door is closed thows error.
   */
  get win() {
    if (!this.opened) {
      throw new Error(ERROR_MESSAGES.DOOR.IS_CLOSED);
    }

    return this._win;
  }
}

module.exports = {
  Door,
};
