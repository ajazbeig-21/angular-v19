import { Component } from '@angular/core';

@Component({
  selector: 'app-my-standalone',
  template: `<h1>Hello from My Standalone Component!</h1>`,
  styleUrls: ['./my-standalone.component.css'],
  // standalone: true // This is optional in Angular 19 as it's the default
})
export class MyStandaloneComponent {
  // You can add any logic here if needed
}