import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { IApi } from './IApi';

export type ThunksExtraArgument = {
  api: IApi;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  any,
  ThunksExtraArgument,
  AnyAction
>;