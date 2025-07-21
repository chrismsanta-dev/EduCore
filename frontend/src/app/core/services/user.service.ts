import { Injectable, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLastLogin, getUser } from '../store/user/user.selectors';
import { User } from '../store/user/user.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DUMMY_USERS } from '../../../../public/dummy_users';
import { UserActions } from '../store/user/user.actions';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  public readonly user = signal<User | undefined>(undefined);
  public readonly lastLogin = signal<Date | undefined>(undefined);

  constructor(private store: Store, private router: Router) {
    this.store.select(getUser).pipe(takeUntilDestroyed()).subscribe(this.user.set);
    this.store.select(getLastLogin).pipe(takeUntilDestroyed()).subscribe(this.lastLogin.set);
  }

  public loginUser(email: string): void {
    const users = DUMMY_USERS;
    const user = users.find((u) => u.email === email);
    if (user) this.store.dispatch(UserActions.loginUser({ user }));

    this.router.navigate(['dashboard']);
  }
}
