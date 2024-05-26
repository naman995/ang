import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  stepForm!: string;
  onClick(status: string) {
    this.stepForm = status;
  }
}
