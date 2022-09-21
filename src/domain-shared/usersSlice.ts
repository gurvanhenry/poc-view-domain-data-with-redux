import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from './types';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    searchResult: '',
  },
  reducers: {
    setSearchResult: (state, action: PayloadAction<string>) => {
      state.searchResult = action.payload;
    }
  }
})

const { actions, reducer } = usersSlice;

export const usersReducer = reducer;

const { setSearchResult } = actions

const makeSearchUser = (text: string): AppThunk => async (dispatch, _, { api }) => {
  const callResult = api.callSearchUser(text);
  if (callResult.status == 'ok') {
    const result = callResult.result;
    dispatch(setSearchResult(result));
  }
  else if (callResult.status == 'error') {
    const result = "-nothing-";
    dispatch(setSearchResult(result));
  }
}

export { makeSearchUser };

// TODO: how to type state when you don't know the full RootState?
// maybe look this doc to type on middleware declaration : https://redux.js.org/usage/usage-with-typescript#type-checking-middleware
export const selectUserSearchResult = (state: any) => state.users.searchResult