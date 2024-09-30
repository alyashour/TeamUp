import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponentComponent } from "./example-component/example-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'team-up';
}
