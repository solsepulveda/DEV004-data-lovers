import { alphabeticOrderAsc } from '../src/data.js';

describe('alphabeticOrderAsc', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderAsc).toBe('function');
  });

  const data = [{"title": "Castle in the Sky"},{"title": "Kiki's Delivery Service"},{"title": "Grave of the Fireflies"}];

  it('sorts data in ascending alphabetic order', () => {
    const expected = [{"title": "Castle in the Sky"},{"title": "Grave of the Fireflies"},{"title": "Kiki's Delivery Service"}];
    const result = alphabeticOrderAsc(data);
    expect(result).toEqual(expected);
  });
});