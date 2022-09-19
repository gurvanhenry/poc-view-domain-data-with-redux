import { hello } from './index';

describe("dede", () => {
  it("should return hello me for hello(me)", () => {
    expect(hello('me')).toBe('Hello me!');
  });
});