import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.model';
import { UserActions } from './user.actions';

const initialState: Readonly<UserState> = {
  user: undefined,
  lastLogin: undefined,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loginUser, (state, { user }) => {
    return {
      ...state,
      user,
    };
  })
);
