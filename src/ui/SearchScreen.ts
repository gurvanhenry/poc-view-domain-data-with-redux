import store from '../domain-ui/store';
import { makeSearchResult, selectUserSearchResult } from '../domain-shared/usersSlice';

export function renderSearchUserResult() {
  const searchResult = selectUserSearchResult(store.getState());
  return searchResult;
}

export function runNewUserSearch(text: string) {
  store.dispatch(makeSearchResult(text));
}