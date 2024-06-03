import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-practice-signals',
  standalone: true,
  imports: [],
  templateUrl: './practice-signals.component.html',
  styleUrl: './practice-signals.component.scss'
})
export class PracticeSignalsComponent {

  firstName = signal('ARUN');
  lastName = signal('KS');


  onIncreaseClicked() {
    computed(() => this.firstName() + this.lastName());
  }

  onDecreaseClicked() {
  }
}
