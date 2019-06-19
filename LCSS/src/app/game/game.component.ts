import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game;
  @Input() image: number;
  name: string;
  description: string;

  constructor() { }

  ngOnInit() {
    this.name = this.game.name;
    this.description = this.game.description;
  }

}
