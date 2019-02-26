// Import Door to use in JSDoc and disable eslint on import line
// eslint-disable-next-line no-unused-vars
const {Door} = require('./Door');
const {Game} = require('./Game');
const {Player} = require('./Player');

/**
 * @enum {ERROR_MESSAGES} Error messages
 */
const ERROR_MESSAGES = {
  PLAYER: {
    NOT_FOUND: 'Player is not playing in game.',
  },
  DOOR: {
    NOT_FOUND: 'The door with the specified number is not found.',
  },
};

/** Game Controller for Monty Hall Game */
class GameController {
  /** @param {Game} game The game to controll */
  constructor(game = new Game(3, new Player())) {
    this._game = game;
  }

  /** Controlled game */
  get game() {
    return this._game;
  }

  /**
   * Selects door
   * @param {Player} player Player to select
   * @param {Number} doorNumber Number of door to select.
   */
  setPlayerSelectedDoor(player, doorNumber) {
    const game = this.game;
    const door = game.doors[doorNumber];
    const host = game.host;

    if (game.player != player) {
      throw new Error(ERROR_MESSAGES.PLAYER.NOT_FOUND);
    }

    if (!door) {
      throw new Error(ERROR_MESSAGES.DOOR.NOT_FOUND);
    }

    const selectedDoorId = player.selectedDoorId;
    if (selectedDoorId) {
      const selectedDoor = game.doors[selectedDoorId];
      host.addDoorToCanOpenDoors(selectedDoor);
    }

    player.selectedDoorId = doorNumber;
    host.removeDoorFromCanOpenDoors(door);
  }

  /**
   * Opens door
   * @param {Player} player Player to select.
   * @param {Number} doorNumber Number of door to select.
   * @return {Boolean} Is opened win.
   */
  playerOpenDoor(player, doorNumber) {
    const game = this.game;
    if (game.player != player) {
      throw new Error(ERROR_MESSAGES.PLAYER.NOT_FOUND);
    }

    const door = game.doors[doorNumber];
    if (!door) {
      throw new Error(ERROR_MESSAGES.DOOR.NOT_FOUND);
    }

    door.opened = true;
    return door.win;
  }

  /** Opens all possible doors */
  hostOpenPossibleDoors() {
    const host = this.game.host;
    host.openAllPossibleDoors();
  }
}

module.exports = {
  GameController,
};
