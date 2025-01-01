import Magician from '../characters/Magician';

describe('Magician tests', () => {
  test('should create a Magician correctly', () => {
    const magician = new Magician('Gandalf');
    const expected = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Gandalf',
      type: 'Magician',
    };

    expect(magician).toEqual(expected);
  });
});
