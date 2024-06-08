import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  title = 'angu';

  onSubmit = () => {
    // this.router.navigate(['/posts']);
    this.router.navigate(['/post', 1, 'postTitle']);
    this.router.navigate(['/post'], {
      queryParams: { page: 1, order: 'postTitle' },
    });
  };

  ngOnInit(): void {
    const obsTest$ = new Observable((observer) => {
      observer.next('Return from observable');
      observer.next('This is also from observable');
    }).subscribe((value) => console.log(value));

    obsTest$.unsubscribe();

    const obsTest = function () {
      return 'return from function';
    };

    const returnData = obsTest();
    console.log(returnData);
  }
}
// to call onservable we need to subscribe it
// Difference between oberver and function is that observer is async and function is sync
// observer is async because it is not executed immediately
// observer is executed when we subscribe it
// function is executed immediately
// observer is used to handle async operations

// obs can return multiple values but function can return only one value
