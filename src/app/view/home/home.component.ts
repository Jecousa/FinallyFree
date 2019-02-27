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
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
