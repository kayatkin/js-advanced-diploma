import Vampire from '../js/characters/Vampire';

test('check create Vampire && movement && attack', () => {
  const vampire1 = new Vampire(1);
  expect(vampire1).toEqual({
    level: 1,
    attack: 25,
    defence: 25,
    health: 50,
    type: 'vampire',
    movementRange: 2,
    attackRange: 2,
  });

  const vampire = new Vampire(3);
  expect(vampire).toEqual({
    level: 3,
    attack: 81,
    defence: 81,
    health: 100,
    type: 'vampire',
    movementRange: 2,
    attackRange: 2,
  });
  const movementRangeIndex = vampire.movementRangeIndex(9, 8);
  expect(movementRangeIndex).toEqual([8, 10, 11, 1, 17, 25, 0, 2, 16, 18, 27]);

  const attackRangeIndex = vampire.attackRangeIndex(10, 8);
  // eslint-disable-next-line max-len
  expect(attackRangeIndex).toEqual([0, 1, 2, 3, 4, 8, 9, 11, 12, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28]);
});
