import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  form: any;
  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl(),
      address: new FormControl(),
    });
  }

  ngOnInit(): void {}
}
