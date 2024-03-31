import Undead from '../js/characters/Undead';

test('check create Undead && movement && attack', () => {
  const undead1 = new Undead(1);
  expect(undead1).toEqual({
    level: 1,
    attack: 40,
    defence: 10,
    health: 50,
    type: 'undead',
    movementRange: 4,
    attackRange: 1,
  });

  const undead = new Undead(4);
  expect(undead).toEqual({
    level: 4,
    attack: 232,
    defence: 57,
    health: 100,
    type: 'undead',
    movementRange: 4,
    attackRange: 1,
  });

  const movementRangeIndex = undead.movementRangeIndex(49, 8);
  // eslint-disable-next-line max-len
  expect(movementRangeIndex).toEqual([48, 50, 51, 52, 53, 41, 33, 25, 17, 57, 40, 42, 35, 28, 21, 56, 58]);

  const attackRangeIndex = undead.attackRangeIndex(60, 8);
  expect(attackRangeIndex).toEqual([51, 52, 53, 59, 61]);
});
