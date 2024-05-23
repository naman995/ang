import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postArray: Array<string> = ['post1', 'post2', 'post3', 'post4', 'post5'];
  objArray: Array<object> = [
    { id: 1, postTitle: 'post1' },
    { id: 2, postTitle: 'post2' },
    { id: 3, postTitle: 'post3' },
    { id: 4, postTitle: 'post4' },
    { id: 5, postTitle: 'post5' },
  ];

  constructor() {}
  ngOnInit(): void {}
}
