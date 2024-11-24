import { Component } from '@angular/core';
import { signal, linkedSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true, // Mark as standalone component
  imports: [FormsModule],
  template: `
    <h1>Counter Example</h1>
    <button (click)="increment()">Increment</button>
    <p>Current Count: {{ count() }}</p>
    
    <input [(ngModel)]="inputValue" placeholder="Enter amount to add" />
    <button (click)="addInputValue()">Add Input Value</button>
    
    <p>Linked Value: {{ linkedValue() }}</p>
  `,
})
export class CounterComponent {
  // Create a writable signal for count
  count = signal(0);

  // Create an input value signal initialized to 0
  inputValue = signal<number>(0);

  // Create a linked signal that reflects the current input value
  linkedValue = linkedSignal<number>(() => this.inputValue());

  increment() {
    this.count.set(this.count() + 1); // Increment the count by 1
    this.inputValue.set(0); // Reset input value when incrementing count
  }

  addInputValue() {
    const inputAmount = Number(this.inputValue()); // Convert input value to number
    console.log(this.count() + inputAmount); // Log the sum
    this.count.set(this.count() + inputAmount); // Add input amount to count
    this.inputValue.set(0); // Reset input value after adding it to count
  }
}