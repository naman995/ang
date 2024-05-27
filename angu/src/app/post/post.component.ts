import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts!: Array<any>;
  constructor(private postService : PostService) {
    // let postService = new PostService();
    this.posts = postService.postList;
  }
  ngOnInit(): void {}
}
