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
      font-size: 2.5rem;
      margin-top: 1rem;
    }
    nav{
      font-size: 1.5rem;
      padding-top:0rem;
      height: 5rem;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
