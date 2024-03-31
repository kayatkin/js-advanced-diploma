/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */
export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    // TODO: выбросите исключение, если кто-то использует "new Character()"
    if (new.target === Character) {
      throw new Error(
        'Объект класса Character не может создаваться "new Character()"',
      );
    }
  }

  getTooltipText() {
    return `\u{1F396} ${this.level} \u{2694} ${this.attack} \u{1F6E1} ${this.defence} \u{2764} ${this.health}`;
  }

  movementRangeIndex(index, boardSize) {
    const box = [];
    const numberRow = Math.floor(index / boardSize);

    // left
    for (let i = 1; i <= this.movementRange; i += 1) {
      const result = index - i;
      if (result < numberRow * boardSize) break;
      box.push(result);
    }
    // right
    for (let i = 1; i <= this.movementRange; i += 1) {
      const result = index + i;
      if (result >= (numberRow + 1) * boardSize) break;
      box.push(result);
    }
    // up
    for (let i = 1; i <= this.movementRange; i += 1) {
      const result = index - i * boardSize;
      if (result < 0) break;
      box.push(result);
    }
    // down
    for (let i = 1; i <= this.movementRange; i += 1) {
      const result = index + i * boardSize;
      if (result > boardSize ** 2 - 1) break;
      box.push(result);
    }
    // up-left
    for (let i = 1; i <= this.movementRange; i += 1) {
      const result = index - i * (boardSize + 1);
      if (result < 0 || (index % boardSize === 0 && i !== 1)) break;
      box.push(result);
    }
    // up-right
    for (let i = 1; i <= this.movementRange; i += 1) {
      const result = index - i * (boardSize - 1);
      if (result < 0 || ((index + 1) % boardSize === 0 && i !== 1)) break;
      box.push(result);
    }
    // down-left
    for (let i = 1; i <= this.movementRange; i += 1) {
      const result = index + i * (boardSize - 1);
      if (result > boardSize ** 2 - 1 || (index % boardSize === 0 && i !== 1)) break;
      box.push(result);
    }
    // down-right
    for (let i = 1; i <= this.movementRange; i += 1) {
      const result = index + i * (boardSize + 1);
      if (
        result > boardSize ** 2 - 1
        || ((index + 1) % boardSize === 0 && i !== 1)
      ) break;
      box.push(result);
    }
    return box;
  }

  attackRangeIndex(index, boardSize) {
    const box = [];

    let start = index - this.attackRange * (boardSize + 1);
    const numberRow = Math.floor(index / boardSize);

    for (let i = 1; i <= 2 * this.attackRange + 1; i += 1) {
      for (let j = 0; j < 2 * this.attackRange + 1; j += 1) {
        const result = start + j;
        if (
          result !== index
          && result >= 0
          && result < boardSize ** 2
          && result >= (numberRow - this.attackRange + i - 1) * boardSize
          && result < (numberRow - this.attackRange + i) * boardSize
        ) {
          box.push(result);
        }
      }
      start += boardSize;
    }
    return box;
  }

  levelUp() {
    this.level += 1;
    this.health = Math.min(this.health + 80, 100); // Максимальное значение здоровья 100

    // Повышаем атаку и защиту на 80% от текущего значения, но не более чем на 100%
    this.attack = Math.floor(
      Math.max(this.attack, (this.attack * (80 + this.health)) / 100),
    );
    this.defence = Math.floor(
      Math.max(this.defence, (this.defence * (80 + this.health)) / 100),
    );
  }
}
