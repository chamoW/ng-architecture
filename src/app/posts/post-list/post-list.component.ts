import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/posts';
  parameter = 'title';

  constructor() { }

  ngOnInit() {
  }

}
