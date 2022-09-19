import { renderSearchUser } from './SearchScreen';

it('should return user:Gurvan if I search G*', () => {
  const out = renderSearchUser('G*');
  expect(out).toBe("user:Gurvan");
});

it('should return user:Alfred if I search A*', () => {
  const out = renderSearchUser('A*');
  expect(out).toBe("user:Alfred");
});

it('should return "" if I search TU*', () => {
  const out = renderSearchUser('TU*');
  expect(out).toBe("");
});