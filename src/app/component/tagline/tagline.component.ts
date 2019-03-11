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
    background-size: cover;
}
  .heading>h1, h4{
    margin: 2em 0 0 0;
    color: #eeeeee;
    text-shadow: 2px 2px 2px #999999;

  }
  #defaultTag{
    background-image:url("../../../assets/backgrounds/DSC_0164.JPG");
  }
  #defaultHeader>h1,h4{
    color: #eeeeee;
    text-shadow: 2px 2px 2px #999999;
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
