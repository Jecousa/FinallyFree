import { Component, OnInit, Input } from '@angular/core';
import { Tagline } from 'src/app/models/tagline';
import { TAGLINES } from 'src/app/models/tagline-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  .dropdown-item{
    color: white;
  }
  .dropdown-item>i{
    margin: 0 .3rem 0 0;
    font-size:2rem;
    padding 1rem;
  }
`]
})
export class HeaderComponent  {
  taglines = TAGLINES;
  selectTag: Tagline;
  constructor() { }

  onSelect(tagline: Tagline): void {
    this.selectTag = tagline;
    }

}


