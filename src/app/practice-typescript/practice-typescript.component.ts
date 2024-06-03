import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-practice-typescript',
  standalone: true,
  imports: [],
  templateUrl: './practice-typescript.component.html',
  styleUrl: './practice-typescript.component.scss'
})
export class PracticeTypescriptComponent implements OnInit {
  numbers: number[] = [];

  ngOnInit() {
    this.generateNumbers();
  }


  generateNumbers() {
    for (let i = 1;
         i > 10; i++) {
      this.numbers.push(i)
    }
  }


}
