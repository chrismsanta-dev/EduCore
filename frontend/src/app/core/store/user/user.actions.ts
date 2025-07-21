import { createActionGroup, props } from '@ngrx/store';
import { User } from './user.model';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Login User': props<{ user: User }>(),
  },
});

export const UserApiActions = createActionGroup({
  source: 'User API',
  events: {},
});
