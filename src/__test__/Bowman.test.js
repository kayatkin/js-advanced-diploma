import Character from '../js/Character';
import Bowman from '../js/characters/Bowman';

test('check create new Bowman & throw error while creating new Character', () => {
  try {
    const bowman = new Bowman(1);
    expect(bowman).toEqual({
      level: 1,
      attack: 25,
      defence: 25,
      health: 50,
      type: 'bowman',
      movementRange: 2,
      attackRange: 2,
    });

    const inform = bowman.getTooltipText();
    expect(inform).toBe('\u{1F396} 1 \u{2694} 25 \u{1F6E1} 25 \u{2764} 50');

    const movementRangeIndex = bowman.movementRangeIndex(9, 8);
    expect(movementRangeIndex).toEqual([8, 10, 11, 1, 17, 25, 0, 2, 16, 18, 27]);

    const attackRangeIndex = bowman.attackRangeIndex(18, 8);
    // eslint-disable-next-line max-len
    expect(attackRangeIndex).toEqual([0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 16, 17, 19, 20, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36]);

    const bowman2 = new Bowman(2);
    expect(bowman2).toEqual({
      level: 2,
      attack: 45,
      defence: 45,
      health: 100,
      type: 'bowman',
      movementRange: 2,
      attackRange: 2,
    });

    // eslint-disable-next-line no-unused-vars
    const character = new Character(1);
  } catch (error) {
    expect(error.message).toBe('Объект класса Character не может создаваться "new Character()"');
  }
});
