import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tagline',
  templateUrl: './tagline.component.html',
  styles: [`
  .heading{
    vertical-align: middle;
    height: 20rem;
    padding: 4rem 1rem 1rem;
    width: 100%;
    color:rgba(255, 238, 0, 0.986);
    text-shadow: 2px 2px 6px rgb(223, 219, 219);
   background-size: cover;
    background-color: gray;
    
}`]
})
export class TaglineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
