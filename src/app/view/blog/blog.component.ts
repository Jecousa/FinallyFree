import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [`
  #blog{
    color:black;
  }`]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
