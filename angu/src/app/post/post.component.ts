import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  outputChildMessage: string = 'Message from child compoent via Output';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
