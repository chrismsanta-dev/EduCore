import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return this.userService.user() ? true : this.router.createUrlTree(['/login']);
  }
}
