// Import Player class to use in JSDoc and disable eslint on next line
// eslint-disable-next-line no-unused-vars
const {Player} = require('./Player');
const {Door} = require('./Door');
const {RandomGenerator} = require('../RandomGenerator');
const {Host} = require('./Host');

/**
 * Monty Hall Game
 */
class Game {
  /**
   * @param {Number} doorsCount Number of doors
   * @param {Player} player Player
   */
  constructor(doorsCount, player) {
    const winDoorNumber = RandomGenerator.generatePseudoRandomInt({
      min: 0,
      max: 2,
    });

    const doors = [];
    const notWinDoors = [];
    for (let i = 0; i < doorsCount; i += 1) {
      let door;
      if (i == winDoorNumber) {
        door = new Door({win: true});
      } else {
        door = new Door({win: false});
        notWinDoors.push(door);
      }
      doors.push(door);
    }

    this.doors = doors;
    this._player = player;

    this._host = new Host(notWinDoors);
  }

  /** Host of game */
  get host() {
    return this._host;
  }

  /** Player who plays in Monty Hall Game */
  get player() {
    return this._player;
  }

  /**
   * Removes door from the game
   * @param {Number} doorNumber Number of door to remove
   * @return {Door} Removed door
   */
  removeDoor(doorNumber) {
    const removedDoor = this.doors.splice(doorNumber, 1)[0];
    return removedDoor;
  }
}

module.exports = {
  Game,
};
