import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  message: string = 'Hello World!';
  imgUrl: string =
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

  bool: boolean = true;

  constructor() {}
  ngOnInit(): void {}

  onClick() {
    this.message = 'You are my hero!';
  }

  onKeyup(e:any) {
    console.log(e.target.value);
  }
}
