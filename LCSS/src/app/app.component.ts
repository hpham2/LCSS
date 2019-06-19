import { Component, OnInit } from '@angular/core';
import { FecthDataService } from './fecth-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  games: any;

  constructor(
    private fetchDataService: FecthDataService
  ) { }

  ngOnInit() {
    this.fetchDataService.getData()
      .then(data => this.games = data).
      catch(error => this.games = [
        {
          'name': 'Error',
          'description': 'error'
        }
      ]);
  }
}
