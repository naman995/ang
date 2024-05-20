import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angu';
  parentMessage = 'message from parent ';
  message!: string;
  @ViewChild(PostComponent) childComp: any;

  ngAfterViewInit(): void {
    this.message = this.childComp.childMessage;
  }
}
