import { searchUser } from './User';

it('should return user:Gurvan if I search G*', () => {
  const out = searchUser('G*');
  expect(out).toBe("user:Gurvan");
});

it('should return user:Alfred if I search A*', () => {
  const out = searchUser('A*');
  expect(out).toBe("user:Alfred");
});

it('should throw error if I search TU*', () => {
  expect(() => {
    const out = searchUser('TU*');
  }).toThrow();
});