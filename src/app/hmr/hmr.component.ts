// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hmr',
  template: `
    <div class="container"> 1 
      <p>Hello, Angular 19 !</p>
    </div>
  `,
  styles: [`
    .container {
      background-color: yellow;
      color: black;
      border-radius:10px;
      padding:20px;
    }
  `]
})
export class AppHmr {
  title = 'hmr';
}