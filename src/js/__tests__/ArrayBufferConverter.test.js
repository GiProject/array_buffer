import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBufferFunction';

test('load test', () => {
  const buffer = getBuffer();
  const test = new ArrayBufferConverter(buffer);
  expect(test.load()).toBe(buffer);
});

test('toString test', () => {
  const buffer = getBuffer();
  const test = new ArrayBufferConverter(buffer);
  expect(test.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
