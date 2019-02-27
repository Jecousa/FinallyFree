import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`

  .container{
    padding: 3rem 1rem 7rem 1rem;
    background-color: 	#eeeeee;
  }
  
  `]
})
export class AppComponent {

  title = 'app';


  constructor() { }

}
