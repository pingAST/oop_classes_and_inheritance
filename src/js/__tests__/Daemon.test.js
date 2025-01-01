import Daemon from '../characters/Daemon';

describe('Daemon tests', () => {
  test('should create a Daemon correctly', () => {
    const daemon = new Daemon('Devil');
    const expected = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Devil',
      type: 'Daemon',
    };

    expect(daemon).toEqual(expected);
  });
});
