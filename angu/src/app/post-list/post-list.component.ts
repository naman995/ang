import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList: Array<any>;
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.postList = postService.postList;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((value) => {
      const page = value.get('page');
      const order = value.get('orderBy');
    });
  }
}
