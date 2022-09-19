import { callSearchUser } from './Api';

it('should return ok with user:Gurvan', () => {
  const out = callSearchUser('G*');
  expect(out.status).toBe("ok");
  expect(out.result).toBe("user:Gurvan");
});

it('should return error', () => {
  const out = callSearchUser('TU*');
  expect(out.status).toBe("error");
});