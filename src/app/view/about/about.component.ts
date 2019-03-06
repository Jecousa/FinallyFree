import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
    #aboutBody2{
      background-color:#dddddd;
      padding:2rem;
    }
    .card{
      background-color:#cedad9;
    }
    .info{
      margin: 2rem 0 0 0;
      1rem 0rem 1rem 0rem;
      padding: 1rem;
      font-size: 2rem;
      width: 100%;
    }
    .outLink{
      padding: 1rem;
      font-size 1rem;
      width: 100%;
    }
  
    #aboutPortfolio{
      margin: 3rem 0 0 0;
    }
    .card-group{
      padding: 1rem 0 0 0;
    }
    #ctaBtn{
      padding: 1rem;
      font-size: 2rem;
      margin: 1rem 0 0 0;
    }
    i{
      font-size: 3rem;
    }
    .fa-github{
      padding-right: 1rem;
    }
    .fa-codepen{
      padding-right: 1rem;
    }
    #aboutDetail2{
      padding: 3rem 0 0 0;
    }
    @media only screen and (max-width: 5\800px){
      #ctaBtn{
        padding: .75;
        font-size: 1.5rem;
        margin: .75rem 0 0 0;
      }
    }
    @media only screen and (max-width: 500px){
      #ctaBtn{
        padding: .5;
        font-size: 1rem;
        margin: .5rem 0 0 0;
      }
    }
    `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
