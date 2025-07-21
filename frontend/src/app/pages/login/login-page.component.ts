import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlComponent } from '../../shared/form-control/form-control.component';
import { UserService } from '../../core/services/user.service';

@Component({
  standalone: true,
  selector: 'edc-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  imports: [FormControlComponent, FormsModule],
})
export class LoginPageComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  constructor(private userService: UserService) {}

  protected onLogin(): void {
    const email = this.form().nativeElement['email'].value;
    const password = this.form().nativeElement['password'].value;

    this.userService.loginUser(email);
  }
}
