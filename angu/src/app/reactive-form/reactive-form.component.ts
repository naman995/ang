import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  form: any;
  // emailRjx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        //  Validators.pattern(this.emailRjx)
      ]),
      address: new FormControl('', Validators.required),
    });
  }
  get fullName() {
    return this.form.get('fullName');
  }
  get email() {
    return this.form.get('email');
  }

  get address() {
    return this.form.get('address');
  }

  onSubmit(){
    console.log(this.form.value);
    // this.form.value;

  }

  ngOnInit(): void {}
}
