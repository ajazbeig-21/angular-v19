import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyStandaloneComponent } from './my-standalone/my-standalone.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyStandaloneComponent,CounterComponent,CommonModule,FormsModule],
  //standalone: true, this is Optional 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-v19';
}
