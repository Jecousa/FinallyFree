import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
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
    .photo{
      padding: 3rem 0 0 0;
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
    `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
