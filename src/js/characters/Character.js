export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов.');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Неверный тип персонажа.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}
