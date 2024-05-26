import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  title:string = 'Post Title';
  count:number = 10000000;
  deval:number = 3.1245432;
  curr: number = 123456;
  date: Date = new Date();
}
