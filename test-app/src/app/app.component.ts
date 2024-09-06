import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngxs/store';
import { TestAction } from './app.state';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  control = new FormControl();

  constructor(private store: Store) {}

  updateState() {
    const newValue = this.control.value || 'hello world';
    this.store.dispatch(new TestAction(newValue));
    alert('new state set!');
    this.control.setValue('');
  }
}
