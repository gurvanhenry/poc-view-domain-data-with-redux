import { searchUser } from './SearchUserScreen';

it('should return user:Gurvan if I search G*', () => {
  const out = searchUser('G*');
  expect(out).toBe("user:Gurvan");
});

it('should return user:Alfred if I search A*', () => {
  const out = searchUser('A*');
  expect(out).toBe("user:Alfred");
});

it('should return "" if I search TU*', () => {
  const out = searchUser('TU*');
  expect(out).toBe("");
});