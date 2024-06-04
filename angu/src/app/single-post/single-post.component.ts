import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // 1

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {

  constructor(private route: ActivatedRoute) {} // 2
  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{ // 3

      let id =  value.get('id');
      const title = value.get('title');
      console.log(id);
      console.log(title);
    })
  }
}
