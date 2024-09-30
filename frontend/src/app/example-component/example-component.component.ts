import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-example-component',
  standalone: true,
  imports: [],
  templateUrl: './example-component.component.html',
  styleUrl: './example-component.component.css'
})
export class ExampleComponentComponent implements OnInit {
  message: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTestMessage().subscribe(
      (response) => {
        alert(response.message);
        this.message = response.message;
      },
      (error) => {
        console.log('Error fetching data from backend: ', error);
      }
    );
  }
}
