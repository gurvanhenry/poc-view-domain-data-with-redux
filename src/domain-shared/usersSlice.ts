import { createSlice } from "@reduxjs/toolkit";
import { IApi } from './IApi';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    searchResult: '',
  },
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    }
  }
})

const { actions, reducer } = usersSlice;

export const usersReducer = reducer;

const { setSearchResult } = actions

const makeSearchResult = (text: string) => (dispatch: any, _: any, { api }: { api: IApi }) => {
  const callResult = api.callSearchUser(text);
  if (callResult.status == 'ok') {
    const result = callResult.result;
    dispatch(setSearchResult(result));
  }
}

export { makeSearchResult };

export const selectUserSearchResult = (state: any) => state.users.searchResult
