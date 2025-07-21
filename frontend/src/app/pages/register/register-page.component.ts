import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlComponent } from '../../shared/form-control/form-control.component';

@Component({
  standalone: true,
  selector: 'edc-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  imports: [FormControlComponent, FormsModule],
})
export class RegisterPageComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  protected onRegister(): void {}
}
