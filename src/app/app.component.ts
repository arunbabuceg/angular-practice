import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PracticeSignalsComponent} from "./practice-signals/practice-signals.component";
import {PracticeTypescriptComponent} from "./practice-typescript/practice-typescript.component";
import {ZohoSalesIqComponent} from "./zoho-sales-iq/zoho-sales-iq.component";
<<<<<<< HEAD
import { InstaChatComponent } from "./insta-chat/insta-chat.component";
=======
import {SnakeAndLadderComponent} from "./snake-and-ladder/snake-and-ladder.component";
import {ApacheEChartsComponent} from "./apache-e-charts/apache-e-charts.component";
>>>>>>> bd69801d7528a61c7ac8b59a061d725f3be6f1b1

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [InstaChatComponent],
=======
  imports: [RouterOutlet, PracticeSignalsComponent, PracticeTypescriptComponent, ZohoSalesIqComponent, SnakeAndLadderComponent, ApacheEChartsComponent],
>>>>>>> bd69801d7528a61c7ac8b59a061d725f3be6f1b1
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';
}
