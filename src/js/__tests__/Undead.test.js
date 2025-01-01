import Undead from '../characters/Undead';

describe('Undead tests', () => {
  test('should create an Undead correctly', () => {
    const undead = new Undead('Zombie');
    const expected = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Zombie',
      type: 'Undead',
    };

    expect(undead).toEqual(expected);
  });
});
