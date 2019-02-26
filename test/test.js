const assert = require('assert');

const {NickGen} = require('../app/core/NickGen');
const {Door} = require('../app/core/Door');
const {Player} = require('../app/core/Player');

it('NickGen.getRandomNick()', () => {
  assert.equal(typeof NickGen.getRandomNick(), 'string');
});

it('Door.opened', () => {
  const door = new Door({win: false});
  assert.equal(door.opened, false);
});

it('Door.win on closed door', () => {
  const door = new Door({win: false});

  let result;
  try {
    door.win;
  } catch (err) {
    result = err;
  }

  assert(result instanceof Error);
});

it('Door.win on opened door (win: false)', () => {
  const door = new Door({win: false});
  door.opened = true;
  assert.equal(door.win, false);
});

it('Door.win on opened door (win: true)', () => {
  const door = new Door({win: true});
  door.opened = true;
  assert.equal(door.win, true);
});

it('Player object', () => {
  const player = new Player();
  assert(player instanceof Player);
});

it('Player.name correct', () => {
  const player = new Player();
  assert.equal(typeof player.name, 'string');
});

it('set Player.selectedDoor', () => {
  const player = new Player();
  const door = new Door();
  assert(player.selectedDoor === null);

  player.selectedDoor = door;
  assert(player.selectedDoor instanceof Door);
});
