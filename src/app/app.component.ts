import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PracticeSignalsComponent} from "./practice-signals/practice-signals.component";
import {PracticeTypescriptComponent} from "./practice-typescript/practice-typescript.component";
import {ZohoSalesIqComponent} from "./zoho-sales-iq/zoho-sales-iq.component";
import {SnakeAndLadderComponent} from "./snake-and-ladder/snake-and-ladder.component";
import {ApacheEChartsComponent} from "./apache-e-charts/apache-e-charts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PracticeSignalsComponent, PracticeTypescriptComponent, ZohoSalesIqComponent, SnakeAndLadderComponent, ApacheEChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';
}
