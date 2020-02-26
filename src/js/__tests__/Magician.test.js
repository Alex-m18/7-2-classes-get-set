import Magician from '../Magician';

test('should return Magician', () => {
  const expected = {
    name: 'vasya',
    type: 'Magician',
    level: 1,
    _health: 100,
    _attack: 10,
    _defence: 40,
  };
  expect(new Magician('vasya')).toMatchObject(expected);
});
