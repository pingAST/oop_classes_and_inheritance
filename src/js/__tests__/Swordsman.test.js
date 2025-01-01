import Swordsman from '../characters/Swordsman';

describe('Swordsman tests', () => {
  test('should create a Swordsman correctly', () => {
    const swordsman = new Swordsman('Warrior');
    const expected = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Warrior',
      type: 'Swordsman',
    };

    expect(swordsman).toEqual(expected);
  });
});
