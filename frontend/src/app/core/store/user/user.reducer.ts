import { createReducer } from '@ngrx/store';
import { UserState } from './user.model';

const initialState: Readonly<UserState> = {
  user: undefined,
  lastLogin: undefined,
};

export const userReducer = createReducer(initialState);
