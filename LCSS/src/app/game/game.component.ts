import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FecthDataService } from '../fecth-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game?;
  @Input() image?: number;
  name: string;
  description: string;
  id: string;
  gameUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private fetchGame: FecthDataService) { }

  ngOnInit() {
    if (this.game === undefined) {
      const id = this.route.snapshot.params.id;
      this.fetchGame.getGame(id).then(game => {
        this.name = game['name'];
        this.description = game['description'];
      });
    } else {
      this.name = this.game.name;
      this.description = this.game.description;
      this.id = this.game.id.toLocaleString();
      this.gameUrl = '/game/' + this.id;
    }
  }
}
