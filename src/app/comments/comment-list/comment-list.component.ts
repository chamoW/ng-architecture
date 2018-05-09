import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/comments';
  parameter = 'body';
  constructor() { }

  ngOnInit() {
  }

}
