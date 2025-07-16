import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.model';

export const selectUserState =
  createFeatureSelector<Readonly<UserState>>('user');

export const getUser = createSelector(selectUserState, (state) => state.user);
export const getLastLogin = createSelector(
  selectUserState,
  (state) => state.lastLogin
);
