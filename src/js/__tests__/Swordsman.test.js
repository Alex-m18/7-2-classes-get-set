import Swordsman from '../Swordsman';

test('should return Swordsman', () => {
  const expected = {
    name: 'vasya',
    type: 'Swordsman',
    level: 1,
    _health: 100,
    _attack: 40,
    _defence: 10,
  };
  expect(new Swordsman('vasya')).toMatchObject(expected);
});
