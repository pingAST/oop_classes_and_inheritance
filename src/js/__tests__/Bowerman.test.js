import Bowerman from '../characters/Bowerman';

describe('Bowman tests', () => {
  test('should create a Bowman correctly', () => {
    const bowman = new Bowerman('Bowman');
    const expected = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Bowman',
      type: 'Bowman',
    };

    expect(bowman).toEqual(expected);
  });
});
