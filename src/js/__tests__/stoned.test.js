import Demon from '../Demon';

test('get attack test', () => {
  const person = new Demon(5);
  person.stoned = 70;
  expect(person.stoned).toBeCloseTo(39);
});
