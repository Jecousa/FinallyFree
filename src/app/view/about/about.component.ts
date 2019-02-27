import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
    .card{
      background-color:#cedad9;
    }
    `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
