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

  const statisticString =
`Games statistic:
Tactic: ${tactic}
Iterations: ${iter}
Number of wins: ${wins} (${wins / iter * 100}%)
Number of failures: ${fails} (${fails / iter * 100}%)`;

  return statisticString;
}

/**
 * @return {Boolean} True if player opened win door.
 */
function playMontyHallGameNotSwitch() {
  const doorsCount = 3;
  const player = new Player();
  const game = new Game(doorsCount, player);
  const gameController = new GameController(game);
  gameController.setPlayerSelectedDoor(player,
      RandomGenerator.generatePseudoRandomInt({min: 0, max: doorsCount - 1})
  );

  gameController.hostOpenPossibleDoors();
  const win = gameController.playerOpenDoor(
      player, player.selectedDoorId
  );
  return win;
}

/**
 * Main function
 */
function main() {
  const statistic = {
    tactic: 'Not-switch',
    iter: 0,
    wins: 0,

  };

  for (let i = 0; i < 1000000; i += 1) {
    const win = playMontyHallGameNotSwitch();
    statistic.iter += 1;
    if (win) {
      statistic.wins += 1;
    }
  }

  console.log(generateStatistic(statistic));
};

main();
