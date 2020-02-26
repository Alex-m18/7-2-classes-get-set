import Undead from '../Undead';

test('should return Undead', () => {
  const expected = {
    name: 'vasya',
    type: 'Undead',
    level: 1,
    _health: 100,
    _attack: 25,
    _defence: 25,
  };
  expect(new Undead('vasya')).toMatchObject(expected);
});
