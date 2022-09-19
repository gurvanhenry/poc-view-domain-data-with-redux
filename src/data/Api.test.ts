import { Api } from './Api';

const api = new Api();

it('should return ok with user:Gurvan', () => {
  const out = api.callSearchUser('G*');
  expect(out.status).toBe("ok");
  expect(out.result).toBe("user:Gurvan");
});

it('should return error', () => {
  const out = api.callSearchUser('TU*');
  expect(out.status).toBe("error");
});