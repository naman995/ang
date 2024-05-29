import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],

})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit = (f: NgForm) => {
    console.log(f.value);
  };
  getValue = (f: FormControl) => {
    console.log(f);
  };
}
