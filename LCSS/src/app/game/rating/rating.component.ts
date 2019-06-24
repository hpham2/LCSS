import { Component, OnInit, Input } from '@angular/core';
import { FecthDataService } from '../../fecth-data.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rate?: number;
  @Input() gameId?: number;
  fakeRate: number;

  constructor( private service: FecthDataService ) { }

  ngOnInit() {
  }

  color(id) {
    if (this.gameId !== undefined) {
      return id <= this.fakeRate ? 'checked' : null;
    } else {
      return id <= this.rate ? 'checked' : null;
    }
  }

  changeColor(id) {
    this.fakeRate = id;
  }

  resetColor() {
    this.fakeRate = null;
  }

  onClick(event) {
    if (this.gameId !== undefined) {
      this.service.postRating(this.gameId, this.fakeRate);
    }
  }
}
