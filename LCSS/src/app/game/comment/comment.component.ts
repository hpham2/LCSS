import { Component, OnInit, Input } from '@angular/core';
import { FecthDataService } from '../../fecth-data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments;
  @Input() gameId;

  constructor( private service: FecthDataService ) { }

  ngOnInit() {
  }

  postComment(comment) {
    this.service.postComment(this.gameId, comment)
      .then(data => {
        console.log(data);
        // push to update
      })
      .catch(error => console.error(error));
  }
}
