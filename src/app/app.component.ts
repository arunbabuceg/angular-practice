import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PracticeSignalsComponent} from "./practice-signals/practice-signals.component";
import {PracticeTypescriptComponent} from "./practice-typescript/practice-typescript.component";
import {ZohoSalesIqComponent} from "./zoho-sales-iq/zoho-sales-iq.component";
import { InstaChatComponent } from "./insta-chat/insta-chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InstaChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';
}
