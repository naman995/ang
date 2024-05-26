import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
    postArray:Array<string>=[
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 4',
    'Post 5',
    'Post 6'
    ]
}
