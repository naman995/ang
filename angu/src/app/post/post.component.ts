import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts!: Array<any>;
  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.postList;
  }
  addNewData() {
    let newPost = {
      id: 7,
      postTitle: 'Post 7',
    };
    this.postService.addPost(newPost);
  }
  ngOnInit(): void {}
}
