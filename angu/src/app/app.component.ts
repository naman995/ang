import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fromChildOutput!: string;
  title = 'angu';
  reciveMessage($event: any) {
    this.fromChildOutput = $event;
  }
}
