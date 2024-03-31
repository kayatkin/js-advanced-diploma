import Magician from '../js/characters/Magician';

test('check create Magician && movement && attack', () => {
  const magician = new Magician(3);
  expect(magician).toEqual({
    level: 3,
    attack: 32,
    defence: 129,
    health: 100,
    type: 'magician',
    movementRange: 1,
    attackRange: 4,
  });

  const movementRangeIndex = magician.movementRangeIndex(28, 8);
  expect(movementRangeIndex).toEqual([27, 29, 20, 36, 19, 21, 35, 37]);

  const attackRangeIndex = magician.attackRangeIndex(0, 8);
  // eslint-disable-next-line max-len
  expect(attackRangeIndex).toEqual([1, 2, 3, 4, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36]);
});
