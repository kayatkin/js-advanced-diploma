import Swordsman from '../js/characters/Swordsman';

test('check create Swordsman && movement && attack', () => {
  const swordsman = new Swordsman(4);
  expect(swordsman).toEqual({
    level: 4,
    attack: 232,
    defence: 57,
    health: 100,
    type: 'swordsman',
    movementRange: 4,
    attackRange: 1,
  });

  const movementRangeIndex = swordsman.movementRangeIndex(54, 8);
  // eslint-disable-next-line max-len
  expect(movementRangeIndex).toEqual([53, 52, 51, 50, 55, 46, 38, 30, 22, 62, 45, 36, 27, 18, 47, 61, 63]);

  const attackRangeIndex = swordsman.attackRangeIndex(32, 8);
  expect(attackRangeIndex).toEqual([24, 25, 33, 40, 41]);

  swordsman.health -= 90;
  swordsman.levelUp();
  expect(swordsman).toEqual({
    level: 5,
    attack: 394,
    defence: 96,
    health: 90,
    type: 'swordsman',
    movementRange: 4,
    attackRange: 1,
  });
});
