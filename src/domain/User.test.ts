import { User } from './User';
import { Api } from '../data/Api';

const api = new Api();
const user = new User(api);

it('should return user:Gurvan if I search G*', () => {
  const out = user.searchUser('G*');
  expect(out).toBe("user:Gurvan");
});

it('should return user:Alfred if I search A*', () => {
  const out = user.searchUser('A*');
  expect(out).toBe("user:Alfred");
});

it('should throw error if I search TU*', () => {
  expect(() => {
    const out = user.searchUser('TU*');
  }).toThrow();
});