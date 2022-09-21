import { renderSearchUserResult, runNewUserSearch } from "./SearchScreen";

it('render search result -> initial state', () => {
  const out = renderSearchUserResult();
  expect(out).toBe('');
})

it('run a search and validate new render (Gurvan)', () => {
  runNewUserSearch('G*');
  const out = renderSearchUserResult();
  expect(out).toBe('user:Gurvan');
})

it('run a search with unexisting user', () => {
  runNewUserSearch('I do not exist');
  const out = renderSearchUserResult();
  expect(out).toBe('-nothing-');
})