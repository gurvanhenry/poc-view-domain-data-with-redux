import { renderSearchUserResult, runNewUserSearch } from "./SearchScreen";

it('render search result -> initial state', () => {
  const out = renderSearchUserResult();
  expect(out).toBe('');
})

it('run a search and validate new render', () => {
  runNewUserSearch('G*');
  const out = renderSearchUserResult();
  expect(out).toBe('user:Gurvan');
})