import { createActionGroup } from '@ngrx/store';

export const UserActions = createActionGroup({
  source: 'User',
  events: {},
});

export const UserApiActions = createActionGroup({
  source: 'User API',
  events: {},
});
