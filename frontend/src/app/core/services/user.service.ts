import { Injectable, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLastLogin, getUser } from '../store/user/user.selectors';
import { User } from '../store/user/user.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class UserService {
  public readonly user = signal<User | undefined>(undefined);
  public readonly lastLogin = signal<Date | undefined>(undefined);

  constructor(private store: Store) {
    this.store.select(getUser).pipe(takeUntilDestroyed()).subscribe(this.user.set);
    this.store.select(getLastLogin).pipe(takeUntilDestroyed()).subscribe(this.lastLogin.set);
  }
}
