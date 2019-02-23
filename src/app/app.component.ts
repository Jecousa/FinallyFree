import { Component, Input } from '@angular/core';
import { TAGLINES } from './models/tagline-list';
import { Tagline } from './models/tagline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  title = 'app';


  constructor() { }

}
