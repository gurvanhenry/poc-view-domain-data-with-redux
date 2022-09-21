import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from '../domain-shared/usersSlice';
import { IApi } from '../domain-shared/IApi';
import { Api } from '../data/Api';

const api: IApi = new Api();

const store = configureStore({
  reducer: {
    users: usersReducer,
  }, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api }
      },
    }),
});

export default store;