import Bowman from '../Bowman';

test('should return Bowman', () => {
  const expected = {
    name: 'vasya',
    type: 'Bowman',
    level: 1,
    _health: 100,
    _attack: 25,
    _defence: 25,
  };
  expect(new Bowman('vasya')).toMatchObject(expected);
});

test('should throw', () => {
  expect(() => new Bowman('v')).toThrow();
  expect(() => new Bowman('v1234567890')).toThrow();
});

test('should damage', () => {
  const character = new Bowman('vasya');
  character.damage(100);
  expect(character.health).toBe(25);
  character.damage(10);
  expect(character.health).toBe(17.5);
  character.damage(100);
  expect(character.health).toBe(0);
});

test('should levelUp', () => {
  const character = new Bowman('vasya');
  character.damage(100);
  character.levelUp();
  const expected = {
    name: 'vasya',
    type: 'Bowman',
    level: 2,
    _health: 100,
    _attack: 30,
    _defence: 30,
  };
  expect(character).toMatchObject(expected);
});

test('should throw on levelUp', () => {
  const character = new Bowman('vasya');
  character.damage(1000);
  expect(() => character.levelUp()).toThrow();
});

test('should use powerMode', () => {
  const character = new Bowman('vasya');

  character.powerModeEnabled = true;
  expect(character.health).toBe(200);
  expect(character.defence).toBe(50);
  expect(character.attack).toBe(50);
  expect(character.powerModeEnabled).toBe(true);

  character.powerModeEnabled = true;
  expect(character.health).toBe(200);
  expect(character.defence).toBe(50);
  expect(character.attack).toBe(50);
  expect(character.powerModeEnabled).toBe(true);

  character.powerModeEnabled = true;
  expect(character.health).toBe(200);
  expect(character.defence).toBe(50);
  expect(character.attack).toBe(50);
  expect(character.powerModeEnabled).toBe(false);

  expect(character.health).toBe(100);
  expect(character.defence).toBe(25);
  expect(character.attack).toBe(25);
});
