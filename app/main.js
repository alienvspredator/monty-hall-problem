// Import Door to use in JSDoc
// eslint-disable-next-line no-unused-vars
const {Door} = require('./core/Game/Door');
const {GameController} = require('./core/Game/GameController');
const {Game} = require('./core/Game/Game');
const {Player} = require('./core/Game/Player');
const {RandomGenerator} = require('./core/RandomGenerator');

/**
 * Generates statistic string
 * @param {Object} statistic Statistic
 * @param {String} statistic.tactic Tactic of Game
 * @param {Number} statistic.iter Iterations count
 * @param {Number} statistic.wins Wins count
 * @return {Strign} Statistic log
 */
function generateStatistic(statistic) {
  const {tactic, iter, wins} = statistic;
  const fails = iter - wins;

  const statisticString = `Games statistic:
Tactic: ${tactic}
Iterations: ${iter}
Number of wins: ${wins} (${(wins / iter) * 100}%)
Number of failures: ${fails} (${(fails / iter) * 100}%)`;

  return statisticString;
}

/**
 * Returns closed not selected door
 * @param {Door[]} doorList Door list
 * @param {Door} selectedDoor Index of selected door
 * @return {Door} Door index
 */
function switchDoor(doorList, selectedDoor) {
  for (const door of doorList) {
    if (door != selectedDoor && !door.opened) {
      return door;
    }
  }
}

/**
 * @param {'switch'|'not-switch'} tactic Tactic of Monty Hall Game
 * @return {Boolean} True if player opened win door.
 */
function playMontyHallGame(tactic) {
  const doorsCount = 3;
  const player = new Player();
  const game = new Game(doorsCount, player);
  const gameController = new GameController(game);
  gameController.setPlayerSelectedDoor(
      player,
      RandomGenerator.generatePseudoRandomInt({min: 0, max: doorsCount - 1})
  );

  gameController.hostOpenPossibleDoors();

  let doorIdToOpen;
  if (tactic === 'switch') {
    const doors = game.doors;
    const selectedDoor = doors[player.selectedDoorId];
    const doorToOpen = switchDoor(doors, selectedDoor);
    doorIdToOpen = doors.indexOf(doorToOpen);
  } else if (tactic === 'not-switch') {
    doorIdToOpen = player.selectedDoorId;
  }

  const win = gameController.playerOpenDoor(player, doorIdToOpen);

  return win;
}

/**
 * Main function
 */
function main() {
  const statistics = [
    {
      tactic: 'not-switch',
      iter: 0,
      wins: 0,
    },
    {
      tactic: 'switch',
      iter: 0,
      wins: 0,
    },
  ];

  for (let i = 0; i < 1000000; i += 1) {
    for (const statistic of statistics) {
      const win = playMontyHallGame(statistic.tactic);
      statistic.iter += 1;
      if (win) {
        statistic.wins += 1;
      }
    }
  }

  for (const statistic of statistics) {
    console.log(generateStatistic(statistic));
    console.log('——————————————————————————');
  }
}

main();
