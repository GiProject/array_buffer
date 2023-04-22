import Magician from '../Magician';

test('get attack test', () => {
  const person = new Magician(4);
  person.attack = 100;
  expect(person.attack).toBe(70);
});
