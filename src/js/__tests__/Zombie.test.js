import Zombie from '../Zombie';

test('should return Zombie', () => {
  const expected = {
    name: 'vasya',
    type: 'Zombie',
    level: 1,
    _health: 100,
    _attack: 40,
    _defence: 10,
  };
  expect(new Zombie('vasya')).toMatchObject(expected);
});
