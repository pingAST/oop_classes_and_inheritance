import Zombie from '../characters/Zombie';

describe('Zombie tests', () => {
  test('should create a Zombie correctly', () => {
    const zombie = new Zombie('Zed');
    const expected = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Zed',
      type: 'Zombie',
    };

    expect(zombie).toEqual(expected);
  });
});
