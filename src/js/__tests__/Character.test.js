import Character from '../characters/Character';
import Bowerman from '../characters/Bowerman';

describe('Character tests', () => {
  test('should throw an error for invalid type', () => {
    expect(() => new Character('Hero', 'Warrior')).toThrow('Неверный тип персонажа.');
  });

  test('should throw an error for invalid name', () => {
    const invalidNames = [
      'A',                // Менее 2 символов
      '',                 // Пустая строка
      'abcdefghijk',      // Более 10 символов
    ];

    invalidNames.forEach(name => {
      expect(() => new Bowerman(name)).toThrow('Имя должно быть строкой от 2 до 10 символов.');
    });
  });
});
