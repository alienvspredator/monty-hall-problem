const {NickGen} = require('../NickGen');

/**
 * Player for Monty Hall Game
 */
class Player {
  /**
   * @param {Object} params
   * @param {String} params.name
   */
  constructor({name = NickGen.getRandomNick()} = {}) {
    this.name = name;
    this.selectedDoorId = null;
  }

  /** @param {String} door */
  set selectedDoorId(door) {
    this._selectedDoorId = door;
  }

  /** @type {String} */
  get selectedDoorId() {
    return this._selectedDoorId;
  }

  /** Player name */
  get name() {
    return this._name;
  }

  /** @param {String} name Player name */
  set name(name) {
    this._name = name;
  }
}

module.exports = {
  Player,
};
