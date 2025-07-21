import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'edc-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormControlComponent {
  public label = input.required<string>();
}
