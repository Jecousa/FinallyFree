import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  @media only screen and (max-width: 600px) {
    #hideMe{
     display: none;
    }
  }
  #homeOffer2{
    background-color:#cedad9;
    margin: 1rem 0rem 1rem 0rem;
  }
  .offer{
    padding: 2rem;
  }
  #consult{
    margin:2rem 0rem 0rem 0rem;
    padding: 2rem;
  }
  i{
    font-size: 3rem;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
