import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rate: number;

  constructor() { }

  ngOnInit() {
  }

  color(id) {
    return id <= this.rate ? 'checked' : null;
  }

  onClick(event) {
    console.log(+event.target.id);
  }
}
