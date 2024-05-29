import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor() {}
  onSubmit = (data: NgForm) => {
    console.log(data);
  };
  getValue = (f: FormControl) => {
    console.log(f);
  };
}
