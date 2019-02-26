import { Component, Input, OnInit } from '@angular/core';
import { Tagline } from 'src/app/models/tagline';
import { Router } from '@angular/router';

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
}`]
})
export class TaglineComponent implements OnInit{
  public currentURL: string = "";
  @Input() tagline: Tagline;

  constructor(private router: Router) { }

  ngOnInit(){
    this.tagline;
    this. currentURL = this.router.url;
    console.log(this.currentURL);
  }

}
