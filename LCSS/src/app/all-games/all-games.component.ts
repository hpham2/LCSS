import { Component, OnInit } from '@angular/core';
import { FecthDataService } from '../fecth-data.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  games: any;

  constructor( private fetchDataService: FecthDataService ) { }

  ngOnInit() {
    this.fetchDataService.getAllGames()
      .then(data => this.games = data).
      catch(error => {
        console.log(error);
        this.games = [
          {
            name: 'Error',
            description: 'error'
          }
        ];
      });
  }
}
