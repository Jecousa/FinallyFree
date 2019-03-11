import { Component, OnInit, Input } from '@angular/core';
import { Tagline } from 'src/app/models/tagline';
import { TAGLINES } from 'src/app/models/tagline-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  #mainLinks{
    color: white;
    font-size: 1.3rem;
  }
  .dropdown-item>i,a{
    margin: 0 .3rem 0 0;
    font-size:1.3rem;
    padding 1rem;
    color: white;
  }
  #mainImg{
    height: 5rem;
    width: 5rem;
  }
  #navbarDropdownMenuLink{
    color:white;
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


