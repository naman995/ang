import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postList: Array<any> = [
    { id: 1, postTitle: 'Post 1', content: 'lorem lorem lorem lorem lorem ' },
    { id: 2, postTitle: 'Post 2', content: 'lorem lorem lorem lorem lorem ' },
    { id: 3, postTitle: 'Post 3', content: 'lorem lorem lorem lorem lorem ' },
    { id: 4, postTitle: 'Post 4', content: 'lorem lorem lorem lorem lorem ' },
    { id: 5, postTitle: 'Post 5', content: 'lorem lorem lorem lorem lorem ' },
    { id: 6, postTitle: 'Post 6', content: 'lorem lorem lorem lorem lorem ' },
  ];

  addPost(data: any) {
    this.postList.push(data);
  }
}
