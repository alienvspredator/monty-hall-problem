// eslint-disable-next-line no-unused-vars
const {Door} = require('./Door');
const {RandomGenerator} = require('../RandomGenerator');

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
   * Opens all but random one possible doors
   */
  openAllPossibleDoors() {
    const doorList = this._canOpenDoorsList;
    const lenght = doorList.length;
    const randomInt = RandomGenerator.generatePseudoRandomInt({
      min: 0,
      max: lenght - 1,
    });

    if (doorList.length > 1) {
      const randomDoor = doorList[randomInt];
      for (const door of doorList) {
        if (door != randomDoor) {
          door.opened = true;
        }
      }
    } else {
      doorList[0].opened = true;
    }
  }

  /**
   * @param {Door} door Host can't open this door
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
