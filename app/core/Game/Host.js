// eslint-disable-next-line no-unused-vars
const {Door} = require('./Door');

/**
 * @enum {ERROR_MESSAGES} Error messages
 */
// eslint-disable-next-line no-unused-vars
const ERROR_MESSAGES = {
  DOOR: {
    NOT_FOUND: 'The door is not found.',
  },
};

/** Host for Monty Hall Game */
class Host {
  /**
   * @param {Door[]} canOpenDoorsList
   */
  constructor(canOpenDoorsList) {
    this._canOpenDoorsList = canOpenDoorsList;
  }

  /** @param {Door[]} doorsList */
  set canOpenDoorsList(doorsList) {
    this._canOpenDoorsList = doorsList;
  }

  /**
   * Opens random door
   * @return {Door} Opened door
   */
  openAllPossibleDoors() {
    for (const door of this._canOpenDoorsList) {
      door.opened = true;
    }

    return this._canOpenDoorsList;
  }

  /**
   * Host can't open door
   * @param {Door} door
   */
  removeDoorFromCanOpenDoors(door) {
    const doorIndex = this._canOpenDoorsList.indexOf(door);
    if (doorIndex >= 0) {
      this._canOpenDoorsList.splice(doorIndex, 1);
    }
  }

  /**
   * @param {Door} door Host can open this door
   */
  addDoorToCanOpenDoors(door) {
    const doorIndex = this._canOpenDoorsList.indexOf(door);
    if (doorIndex < 0) {
      this._canOpenDoorsList.push(door);
    }
  }
}

module.exports = {
  Host,
};
