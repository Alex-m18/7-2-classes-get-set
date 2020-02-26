import Daemon from '../Daemon';

test('should return Daemon', () => {
  const expected = {
    name: 'vasya',
    type: 'Daemon',
    level: 1,
    _health: 100,
    _attack: 10,
    _defence: 40,
  };
  expect(new Daemon('vasya')).toMatchObject(expected);
});
