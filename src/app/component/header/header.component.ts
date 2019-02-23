import { Component, OnInit, Input } from '@angular/core';
import { Tagline } from 'src/app/models/tagline';
import { TAGLINES } from 'src/app/models/tagline-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`

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


