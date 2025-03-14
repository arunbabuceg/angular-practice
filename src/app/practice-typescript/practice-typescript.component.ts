import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-practice-typescript',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './practice-typescript.component.html',
  styleUrl: './practice-typescript.component.scss'
})
export class PracticeTypescriptComponent implements OnInit {
  number = 0;
  result = '';

  ngOnInit(): void {
  }

  checkOddOrEven() {

    if (this.number % 2 === 0) {
      this.result = 'even';

    } else {
      this.result = 'odd';
    }

  }

  printDiamond(n: number) {
    let str = '';

    for (let i = 1; i <= n; i++) {
      str += ''.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }

    for (let i = n - 1; i >= 1; i--) {
      str += ''.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    console.log(str);

  }

  input = '';
  results: number[]= []

  removeDuplicate() {
    const numbers = this.input.split(',').map(num => parseInt(num.trim(), 10));
    this.results = [...new Set(numbers)];
    console.log(this.results)
  }

}
