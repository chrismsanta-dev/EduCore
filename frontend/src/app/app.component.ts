import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'edc-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent {}
