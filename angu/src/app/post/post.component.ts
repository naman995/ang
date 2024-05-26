import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  userDetails = {
    name: 'John Doe',
    city: 'New York',
    countryCode: 'US',
  };
}
