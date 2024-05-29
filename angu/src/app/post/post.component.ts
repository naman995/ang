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
  onSubmit = (f: NgForm) => {
    console.log(f.value);
  };
  getValue = (f: FormControl) => {
    console.log(f);
  };
}
