import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    .footer {
      position: relative;
      bottom: 0;
      width: 100%;
      margin-top: 3rem;
    }
    i{
      margin-left: .5rem;
      font-size: 1.75rem;
      margin-top: 1rem;
    }
    nav{
      font-size: 1.75rem;
      padding-top:0rem;
    }

    @media only screen and (max-width: 525px) {
      i{
        margin-left: .5rem;
        font-size: 1.25rem;
        margin-top: 1rem;
      }
      nav{
        font-size: 1.25rem;
        padding-top:0rem;
        height: 5rem;
      }
    }
   
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
